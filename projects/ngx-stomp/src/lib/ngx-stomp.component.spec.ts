import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStompComponent } from './ngx-stomp.component';

describe('NgxStompComponent', () => {
  let component: NgxStompComponent;
  let fixture: ComponentFixture<NgxStompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
