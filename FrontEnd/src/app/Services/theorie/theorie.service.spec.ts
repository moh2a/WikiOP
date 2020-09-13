import { TestBed } from '@angular/core/testing';

import { TheorieService } from './theorie.service';

describe('TheorieService', () => {
  let service: TheorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
