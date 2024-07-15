import { TestBed } from '@angular/core/testing';

import { CosmeticsService } from './cosmetics.service';

describe('CosmeticsService', () => {
  let service: CosmeticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmeticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
