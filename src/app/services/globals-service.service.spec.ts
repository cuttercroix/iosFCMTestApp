import { TestBed } from '@angular/core/testing';

import { GlobalsServiceService } from './globals-service.service';

describe('GlobalsServiceService', () => {
  let service: GlobalsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
