import { TestBed } from '@angular/core/testing';

import { NgxMessageService } from './ngx-message.service';

describe('NgxMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMessageService = TestBed.get(NgxMessageService);
    expect(service).toBeTruthy();
  });
});
