import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ColorScheme } from 'src/app/shared/classes/types';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  private readonly colorSchemePrefix: string;
  private readonly localStorageKey: string;
  private renderer: Renderer2;
  private colorSchemeSubject: BehaviorSubject<ColorScheme>;

  constructor(rendererFactory: RendererFactory2) {
    this.colorSchemePrefix = 'color-scheme-';
    this.localStorageKey = 'prefers-color';
    this.renderer = rendererFactory.createRenderer(null, null);
    this.colorSchemeSubject = new BehaviorSubject<ColorScheme>('light');
    this.detectPrefersColorScheme();
  }

  load(): void {
    this.getColorScheme();
    this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorSchemeSubject.value);
  }

  update(scheme: ColorScheme): void {
    this.removeColorScheme(scheme);
    this.setColorScheme(scheme);
    this.load();
  }

  currentActive(): Observable<ColorScheme> {
    return this.colorSchemeSubject.asObservable();
  }

  toApply(): Observable<ColorScheme> {
    return this.colorSchemeSubject.asObservable()
      .pipe(map((color: ColorScheme) => color === 'dark' ? 'light' : 'dark'));
  }

  private detectPrefersColorScheme(): void {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event: MediaQueryListEvent): void => this.update(event.matches? 'dark' : 'light'));
  }

  private getColorScheme(): void {
    const localStorageColorScheme = localStorage.getItem(this.localStorageKey) as ColorScheme;

    if (localStorageColorScheme) {
      this.colorSchemeSubject.next(localStorageColorScheme);
    }
  }

  private removeColorScheme(scheme: ColorScheme): void {
    localStorage.removeItem(this.localStorageKey);
    this.renderer.removeClass(document.body, this.colorSchemePrefix + (scheme === 'dark' ? 'light' : 'dark'));
  }

  private setColorScheme(scheme: ColorScheme): void {
    this.colorSchemeSubject.next(scheme);
    localStorage.setItem(this.localStorageKey, scheme);
  }
}
