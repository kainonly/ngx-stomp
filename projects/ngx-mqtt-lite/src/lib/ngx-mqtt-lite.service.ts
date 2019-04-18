import {Injectable} from '@angular/core';
import {IClientOptions, MqttClient} from 'mqtt';

declare let mqtt: {
  connect(brokerUrl?: any, opts?: IClientOptions): MqttClient
};

@Injectable()
export class NgxMqttLiteService {
  client: MqttClient;

  init() {
    this.client = mqtt.connect();
  }
}
