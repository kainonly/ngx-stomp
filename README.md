# Ngx Mqtt Lite

A Lite Wrapper Around MQTT.js for Angular

[![npm](https://img.shields.io/npm/v/ngx-mqtt-lite.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mqtt-lite)
[![Downloads](https://img.shields.io/npm/dm/ngx-mqtt-lite.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mqtt-lite)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/kainonly/ngx-message-queue/blob/master/LICENSE)

### Setup

```shell
npm install mqtt --save
npm install ngx-mqtt-lite --save
```

### Initialization

Add MQTT.js Library `angular.json`

```json
{
  "scripts": [
    "./node_modules/mqtt/dist/mqtt.min.js"
  ]
}
```

Edit `app.module`

```typescript
import {NgxMqttLiteService} from 'ngx-mqtt-lite';

@NgModule({
  providers: [
    NgxMqttLiteService,
  ],
})
export class AppModule {
}
```

Usage

```typescript
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
```

### Api

- `client: MqttClient`
- `initializa(brokerUrl?: any, opts?: IClientOptions)` 
- `scope(): Observable<MqttClient>`
- `listen(event: string): Observable<any>`
- `destory()`

---

# Ngx Stomp

[![npm](https://img.shields.io/npm/v/ngx-stomp.svg?style=flat-square)](https://www.npmjs.com/package/ngx-stomp)
[![Downloads](https://img.shields.io/npm/dm/ngx-stomp.svg?style=flat-square)](https://www.npmjs.com/package/ngx-stomp)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/kainonly/ngx-message-queue/blob/master/LICENSE)

Support Stomp.js for Angular or Ionic

## Installation

First install the stompjs library to support the browser stomp protocol.

``` shell
$ npm install @stomp/stompjs --save
```

Then install this library to support Angular or Ionic

``` shell
$ npm install ngx-stomp --save 
```

## Usage

If it's Angular project, modify in `angular.json` or `angular-cli.json`

``` json
{
  "scripts": [
    "node_modules/@stomp/stompjs/lib/stomp.min.js"
  ]
}
```

If it's Ionic project, first modify package.json, like this:

``` json
{
  "name": "library",
  "config": {
    "ionic_copy": "./config/copy.config.js"
  }
}
```

Create file `copy.config`

``` javascript
// path config/copy.config.js
module.exports = {
  copyCropperjs: {
    src: ["{{ROOT}}/node_modules/@stomp/stompjs/lib/stomp.min.js"],
    dest: "{{BUILD}}"
  }
};
```

Add `stomp.min.js` the `index.html`

``` html
<!-- src/index.html -->
<script src="build/stomp.min.js"></script>
```

> After that, Angular and Ionic use are the same.

Modify in the `app.module.ts`

``` typescript
import {NgxStompConfig, NgxStompService} from 'ngx-stomp';

@NgModule({
  providers: [
    NgxStompService,
    {
      provide: NgxStompConfig,
      useValue: {
        url: '', // Websockets Url
        reconnect_delay: 0, // Client Reconnect Delay
        debug: null, // Client Debug
        username: '', // Connect Username
        password: '', // Connect Password
        incoming: 0, // Heartbeat Incoming
        outgoing: 0, // Heartbeat Outgoing
        vhost: '' // Client Vhost
      }
    }
  ]
})
```

Connect to the stomp service

``` typescript
...
constructor(private stomp: NgxStompService) {

}

this.stomp.connect();
...
```

Subscribe to the message queue

``` typescript
this.stomp.ready.subscribe(({client,frame}) => {
  client.subscribe('/exchange/some', message => {
    console.log(message);
  });
});
```

Destory service and disconnect

``` typescript
this.stomp.destory();
```
