import {Client, Frame} from '@stomp/stompjs';

export interface Config {


  /**
   * TODO: Websockets Url
   */
  url: string;
  /**
   * TODO: Client Reconnect Delay
   */
  reconnect_delay?: number;
  /**
   * TODO: Client Debug
   */
  debug?: null | ((...args) => any);
  /**
   * TODO: Connect Username
   */
  username: string;
  /**
   * TODO: Connect Password
   */
  password: string;
  /**
   * TODO: Heartbeat Incoming
   */
  incoming?: number;
  /**
   * TODO: Heartbeat Outgoing
   */
  outgoing?: number;
  /**
   * TODO: Client Vhost
   */
  vhost?: string;
}

export interface ReadySubject {
  client: Client;
  frame: Frame;
}
