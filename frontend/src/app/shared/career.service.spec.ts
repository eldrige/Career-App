import { TestBed } from '@angular/core/testing';

import { CareerService } from './career.service';

describe('CareerService', () => {
  let service: CareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
