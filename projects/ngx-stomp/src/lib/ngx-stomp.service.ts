import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';
import {AsyncSubject} from 'rxjs';
import {NgxStompConfig} from './ngx-stomp.config';
import {ReadySubject} from './declare';

declare let Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class NgxStompService {
  // TODO: ready subject events
  ready: AsyncSubject<ReadySubject> = new AsyncSubject<ReadySubject>();
  // TODO: stomp client
  private client: Client;

  constructor(private config: NgxStompConfig) {
  }

  /**
   * TODO: connect stomp
   */
  connect() {
    if (!this.config.url) return;
    this.client = Stomp.client(this.config.url);
    if (this.config.debug !== undefined) this.client.debug = this.config.debug;
    if (this.config.incoming !== undefined) this.client.heartbeat.incoming = this.config.incoming;
    if (this.config.outgoing !== undefined) this.client.heartbeat.outgoing = this.config.outgoing;
    if (this.config.reconnect_delay !== undefined) this.client.reconnect_delay = this.config.reconnect_delay;
    if (this.client.connected) return;
    if (!this.config.username || !this.config.password) return;
    this.client.connect(this.config.username, this.config.password, frame => {
        this.ready.next({
          client: this.client,
          frame: frame
        });
        this.ready.complete();
      }, error => this.ready.error(error)
      , _ => this.ready.unsubscribe()
      , this.config.vhost ? this.config.vhost : '/'
    );
  }

  /**
   * TODO: destory StompService
   */
  destory() {
    if (this.client) this.client.disconnect();
    this.ready = new AsyncSubject<any>();
  }
}
