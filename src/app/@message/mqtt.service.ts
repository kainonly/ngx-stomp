import {Injectable, NgZone} from '@angular/core';
import {AsyncSubject} from 'rxjs';
import {MqttClient} from 'mqtt';

declare let Client: MqttClient;

@Injectable()
export class MqttService {
  private mqttClient: MqttClient;
  ready: AsyncSubject<MqttClient> = new AsyncSubject();

  client(brokerUrl: string, opts?: any) {
    // this.mqttClient = connect(brokerUrl, opts);
    // this.ready.next(this.mqttClient);
    // this.ready.complete();
  }
}
