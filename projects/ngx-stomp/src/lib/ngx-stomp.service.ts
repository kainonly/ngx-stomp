import {Injectable} from '@angular/core';
import {AsyncSubject} from 'rxjs';
import {Client, Stomp} from '@stomp/stompjs';
import {ReadySubject} from './declare';
import {ConfigService} from './config.service';

@Injectable()
export class NgxStompService {

  /**
   * stomp client
   */
  private client: Client;

  /**
   *  ready subject events
   */
  ready: AsyncSubject<ReadySubject> = new AsyncSubject<ReadySubject>();

  constructor(private config: ConfigService) {
    console.log(Stomp);
  }


  /**
   * connect stomp
   */
  connect() {

  }

  private configInit() {
    if (this.config.debug) {
      this.client.debug = this.config.debug;
    }
    if (this.config.incoming) {
      this.client.heartbeatIncoming = this.config.incoming;
    }
    if (this.config.outgoing) {
      this.client.heartbeatOutgoing = this.config.outgoing;
    }
    if (this.config.reconnect_delay) {
      this.client.reconnectDelay = this.config.reconnect_delay;
    }
    if (!this.config.username || !this.config.password) {
      return;
    }
  }

  // /**
  //  *  destory StompService
  //  */
  // destory() {
  //   if (this.client) this.client.disconnect();
  //   this.ready = new AsyncSubject<any>();
  // }
}
