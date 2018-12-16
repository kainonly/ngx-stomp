import {Injectable} from '@angular/core';
import {Config} from './declare';

@Injectable()
export class NgxStompService {
  config: Config;

  constructor() {
  }
}
