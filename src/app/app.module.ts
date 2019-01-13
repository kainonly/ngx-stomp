import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {MarkdownModule} from 'ngx-markdown';

import zh from '@angular/common/locales/zh';
import {HomeComponent} from './home/home.component';
import {StompComponent} from './stomp/stomp.component';
import {MqttComponent} from './mqtt/mqtt.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StompComponent,
    MqttComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'stomp', component: StompComponent},
      {path: 'mqtt', component: MqttComponent}
    ], {useHash: true})
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
