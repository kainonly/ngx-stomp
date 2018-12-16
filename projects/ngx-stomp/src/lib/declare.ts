import {Client, Frame} from '@stomp/stompjs';

export interface Config {

}

export interface ReadySubject {
  client: Client;
  frame: Frame;
}
