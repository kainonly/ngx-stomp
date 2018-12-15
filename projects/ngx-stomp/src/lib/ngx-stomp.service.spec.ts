import { TestBed } from '@angular/core/testing';

import { NgxStompService } from './ngx-stomp.service';

describe('NgxStompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStompService = TestBed.get(NgxStompService);
    expect(service).toBeTruthy();
  });
});
