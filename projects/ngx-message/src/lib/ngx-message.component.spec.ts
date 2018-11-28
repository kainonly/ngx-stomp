import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMessageComponent } from './ngx-message.component';

describe('NgxMessageComponent', () => {
  let component: NgxMessageComponent;
  let fixture: ComponentFixture<NgxMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
