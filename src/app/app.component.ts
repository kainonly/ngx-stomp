import {Component, OnInit} from '@angular/core';
import {NgxMqttLiteService} from 'ngx-mqtt-lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private ngxMqttLiteService: NgxMqttLiteService) {

  }

  ngOnInit() {
    this.ngxMqttLiteService.initializa('ws://imac.com/ws', {
      username: 'kain',
      password: '123456',
      port: 15675,
      keepalive: 15
    });
    this.ngxMqttLiteService.scope().subscribe(client => {
      client.subscribe('erp.order.create');
    });
    this.ngxMqttLiteService.listen('message').subscribe(data => {
      console.log(data[1].toString());
    });
  }
}
