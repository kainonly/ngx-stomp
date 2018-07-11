import {Component, OnInit} from '@angular/core';
import {NgxStompService} from 'ngx-stomp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private stomp: NgxStompService) {
  }

  ngOnInit() {
    this.stomp.connect();
    this.stomp.ready.subscribe(({client}) => {
      client.subscribe('/exchange/test', message => {
        console.log(message);
      });
    });
  }
}
