import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxStompService} from 'ngx-stomp-dev';
import {Config} from './declare';
import {ConfigService} from './config.service';

@NgModule({
  providers: [NgxStompService]
})
class NgxStompModule {
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
