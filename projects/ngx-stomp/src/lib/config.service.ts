import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';

@Injectable()
export class ConfigService extends Client {
}
