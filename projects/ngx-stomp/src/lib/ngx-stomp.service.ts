import {Injectable} from '@angular/core';
import {Client, Frame} from '@stomp/stompjs';

interface ReadySubject {
  client: Client;
  frame: Frame;
}

@Injectable()
export class NgxStompService {
  constructor() {
  }
}
