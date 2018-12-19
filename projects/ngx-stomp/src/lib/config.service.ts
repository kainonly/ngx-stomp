import {Injectable} from '@angular/core';
import {Config} from './declare';

@Injectable()
export class ConfigService implements Config {
  debug: ((...args) => any) | null;
  incoming: number;
  outgoing: number;
  password: string;
  reconnect_delay: number;
  url: string;
  username: string;
  vhost: string;
}
