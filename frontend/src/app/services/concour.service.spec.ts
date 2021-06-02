import { TestBed } from '@angular/core/testing';

import { ConcourService } from './concour.service';

describe('ConcourService', () => {
  let service: ConcourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
