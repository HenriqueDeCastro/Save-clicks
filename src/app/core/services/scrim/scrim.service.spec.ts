import { TestBed } from '@angular/core/testing';

import { ScrimService } from './scrim.service';

describe('ScrimService', () => {
  let service: ScrimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
