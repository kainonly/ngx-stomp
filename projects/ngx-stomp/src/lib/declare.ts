import {Client, Frame} from '@stomp/stompjs';

export interface ReadySubject {
  client: Client;
  frame: Frame;
}
