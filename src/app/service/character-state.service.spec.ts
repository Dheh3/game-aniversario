import { TestBed } from '@angular/core/testing';

import { CharacterStateService } from './character-state.service';

describe('CharacterStateService', () => {
  let service: CharacterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
