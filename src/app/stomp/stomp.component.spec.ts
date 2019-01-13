import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StompComponent } from './stomp.component';

describe('StompComponent', () => {
  let component: StompComponent;
  let fixture: ComponentFixture<StompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
