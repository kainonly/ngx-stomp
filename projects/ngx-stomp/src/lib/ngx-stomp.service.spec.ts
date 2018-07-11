import { TestBed, inject } from '@angular/core/testing';

import { NgxStompService } from './ngx-stomp.service';

describe('NgxStompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxStompService]
    });
  });

  it('should be created', inject([NgxStompService], (service: NgxStompService) => {
    expect(service).toBeTruthy();
  }));
});
