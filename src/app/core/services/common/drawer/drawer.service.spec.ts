import { async, TestBed } from '@angular/core/testing';
import { ScrimService } from '../scrim/scrim.service';

import { DrawerService } from './drawer.service';

describe(`DrawerService`, () => {
  let service: DrawerService;
  let scrimService: ScrimService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrimService]
    });
    service = TestBed.inject(DrawerService);
    scrimService = TestBed.inject(ScrimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${DrawerService.prototype.change.name}
    should change value of openDrawerSubjectValue when change() is called`, async(() => {
    service.change();
    service.status().subscribe((openDrawerSubjectValue: boolean) => expect(openDrawerSubjectValue).toBe(true));
  }));

  it(`#${DrawerService.prototype.change.name}
    should call change() from ScrimService when change() is called`, () => {
    let scrimServiceChangeSpy = jest.spyOn(scrimService, 'change');
    service.change();

    expect(scrimServiceChangeSpy).toHaveBeenCalled();
  });

  it(`#${DrawerService.prototype.status.name}
    should return openDrawerSubject when status() is called`, async(() => {
    service.status().subscribe((openDrawerSubjectValue: boolean) => expect(openDrawerSubjectValue).toBe(false));
  }));
});
