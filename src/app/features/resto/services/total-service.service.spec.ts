import { TestBed } from '@angular/core/testing';

import { TotalServiceService } from './total-service.service';

describe('TotalServiceService', () => {
  let service: TotalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
