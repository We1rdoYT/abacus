import { TestBed } from '@angular/core/testing';

import { AbacusService } from './abacus.service';

describe('AbacusService', () => {
  let service: AbacusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbacusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
