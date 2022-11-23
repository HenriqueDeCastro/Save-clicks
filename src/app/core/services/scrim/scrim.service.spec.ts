import { async, TestBed } from '@angular/core/testing';

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

  it(`#${ScrimService.prototype.change.name}
    should change value of visibleScrimSubject when change() is called`, async(() => {
    service.change();
    service.status().subscribe((visibleScrimSubject: boolean) => expect(visibleScrimSubject).toBe(true));
  }));

  it(`#${ScrimService.prototype.status.name}
    should return visibleScrimSubject when status() is called`, async(() => {
    service.status().subscribe((visibleScrimSubject: boolean) => expect(visibleScrimSubject).toBe(false));
  }));
});
