import {ModuleWithProviders, NgModule} from '@angular/core';
import {Config} from './declare';
import {NgxStompService} from './ngx-stomp.service';
import {ConfigService} from './config.service';

@NgModule()
export class NgxStompModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: NgxStompModule,
      providers: [
        NgxStompService,
        {provide: ConfigService, useValue: config},
      ]
    };
  }
}
