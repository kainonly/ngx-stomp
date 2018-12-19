import {Component} from '@angular/core';
import {NgxStompService} from 'ngx-stomp-dev';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private stomp: NgxStompService) {
  }
}
