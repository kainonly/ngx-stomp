import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxStompConfig, NgxStompService} from 'ngx-stomp';
import {config} from './config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NgxStompService,
    {
      provide: NgxStompConfig,
      useValue: config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
