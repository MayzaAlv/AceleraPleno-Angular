import { TestBed } from '@angular/core/testing';

import { GetZIPService } from './get-ZIP.service';

describe('GetCepService', () => {
  let service: GetZIPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetZIPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
