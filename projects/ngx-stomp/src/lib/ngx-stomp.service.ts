import {Injectable} from '@angular/core';
import {AsyncSubject} from 'rxjs';
import {Client} from '@stomp/stompjs';
import {ReadySubject} from './declare';
import {ConfigService} from './config.service';

@Injectable()
export class NgxStompService {

  /**
   * stomp client
   */
  private client: Client = new Client();

  /**
   *  ready subject events
   */
  ready: AsyncSubject<ReadySubject> = new AsyncSubject<ReadySubject>();

  constructor(private config: ConfigService) {
    console.log(this.config);
  }

  /**
   * connect stomp
   */
  connect() {

  }


  // /**
  //  *  destory StompService
  //  */
  // destory() {
  //   if (this.client) this.client.disconnect();
  //   this.ready = new AsyncSubject<any>();
  // }
}
