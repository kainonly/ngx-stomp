import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private routerEvent: Subscription;

  active_path = '/';
  routerlinks = [
    {path: '/', label: 'Getting Started'},
    {path: '/stomp', label: 'Example Stomp'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.routerEvent = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.active_path = event.url;
      }
    });
  }

  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }
}
