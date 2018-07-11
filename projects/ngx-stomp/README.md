# ngx-stomp

[![npm](https://img.shields.io/npm/v/ngx-stomp.svg)](https://www.npmjs.com/package/ngx-stomp) 
[![npm](https://img.shields.io/npm/dm/ngx-stomp.svg)](https://www.npmjs.com/package/ngx-stomp)

Support Stomp.js for Angular or Ionic

## Installation

First install the stompjs library to support the browser stomp protocol.

``` shell
$ npm install @stomp/stompjs --save
```

Then install this library to support Angular

``` shell
$ npm install ngx-stomp --save 
```

## Usage

Add in angular.json

``` json
{
  "scripts": [
    "node_modules/@stomp/stompjs/lib/stomp.min.js"
  ]
}
```

Modify in the app.module.ts

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

Connect Stomp

``` typescript
...
constructor(private stomp: NgxStompService) {

}

this.stomp.connect();
...
```

Subscription

``` typescript
this.stomp.ready.subscribe(({client,frame}) => {
  client.subscribe('/exchange/some', message => {
    console.log(message);
  });
});
```



