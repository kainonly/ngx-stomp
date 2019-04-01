import {Component} from '@angular/core';
import {MqttService} from './@message/mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private mqttService: MqttService) {

  }
}
