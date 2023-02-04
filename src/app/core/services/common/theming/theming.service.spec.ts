import { Renderer2, RendererFactory2 } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { colorScheme } from 'src/app/shared/classes/types';

import { ThemingService } from './theming.service';

describe('ThemingService', () => {
  let service: ThemingService;
  let renderer2: Renderer2 = { addClass: jest.fn(), removeClass: jest.fn() } as unknown as Renderer2;
  let localStorageKey = 'prefers-color';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RendererFactory2,
          useValue: { createRenderer: () => renderer2 }
        },
        Renderer2
      ]
    });
    service = TestBed.inject(ThemingService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${ThemingService.prototype.load.name}
    should get color from localstorage when there is value in ${localStorageKey}`, async(() => {
    localStorage.setItem(localStorageKey, 'dark')
    service.load();
    service.currentActive().subscribe((colorSchemeSubjectValue: colorScheme) => expect(colorSchemeSubjectValue).toBe('dark'));
  }));

  it(`#${ThemingService.prototype.load.name}
    should keep color from color Scheme Subject when there is no value in ${localStorageKey}`, async(() => {
    service.load();
    service.currentActive().subscribe((colorSchemeSubjectValue: colorScheme) => expect(colorSchemeSubjectValue).toBe('light'));
  }));

  it(`#${ThemingService.prototype.load.name}
    should call addClass from renderer`, () => {
    let rendererAddClassSpy = jest.spyOn(renderer2, 'addClass');
    service.load();

    expect(rendererAddClassSpy).toHaveBeenCalled();
  });

  it(`#${ThemingService.prototype.update.name}
    should must add new color in localstorage`, async(() => {
    service.update('dark');
    const localStorageValue = localStorage.getItem(localStorageKey);

    service.currentActive().subscribe((colorSchemeSubjectValue: colorScheme) => expect(colorSchemeSubjectValue).toBe('dark'));
    expect(localStorageValue).toBe('dark');
  }));

  it(`#${ThemingService.prototype.update.name}
    should remove current theme and call load method to load next theme`, () => {
    let rendererRemoveClassSpy = jest.spyOn(renderer2, 'removeClass');
    let serviceLoadSpy = jest.spyOn(service, 'load');
    service.update('dark');

    expect(rendererRemoveClassSpy).toHaveBeenCalled();
    expect(serviceLoadSpy).toHaveBeenCalled();
  });

  it(`#${ThemingService.prototype.currentActive.name}
    should return value of colorSchemeSubject`, async(() => {
    service.currentActive().subscribe((colorSchemeSubjectValue: colorScheme) => expect(colorSchemeSubjectValue).toBe('light'));
  }));

  it(`#${ThemingService.prototype.toApply.name}
    should return value of theme not being applied`, async(() => {
    service.toApply().subscribe((colorSchemeSubjectValue: colorScheme) => expect(colorSchemeSubjectValue).toBe('dark'));
  }));
});
