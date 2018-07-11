# ngx-stomp

[![npm](https://img.shields.io/npm/v/ngx-stomp.svg)](https://www.npmjs.com/package/ngx-stomp) 
[![npm](https://img.shields.io/npm/dm/ngx-stomp.svg)](https://www.npmjs.com/package/ngx-stomp)

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



