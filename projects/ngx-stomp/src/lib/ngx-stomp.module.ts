import {ModuleWithProviders, NgModule} from '@angular/core';
import {Client} from '@stomp/stompjs';
import {NgxStompService} from './ngx-stomp.service';
import {ConfigService} from './config.service';


@NgModule()
export class NgxStompModule {
  static forRoot(config: Client): ModuleWithProviders {
    return {
      ngModule: NgxStompModule,
      providers: [
        NgxStompService,
        {provide: ConfigService, useValue: config},
      ]
    };
  }
}
