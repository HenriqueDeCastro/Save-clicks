import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  private renderer: Renderer2;
  private colorSchemePrefix: string;
  private colorSchemeSubject: BehaviorSubject<string>;

  constructor(rendererFactory: RendererFactory2) {
      this.colorSchemePrefix = 'color-scheme-';
      this.renderer = rendererFactory.createRenderer(null, null);
      this.colorSchemeSubject = new BehaviorSubject<string>('');
  }

  private detectPrefersColorScheme(): void {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          this.colorSchemeSubject.next(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      } else {
          this.colorSchemeSubject.next('dark');
      }
  }

  private setColorScheme(scheme: string): void {
      this.colorSchemeSubject.next(scheme);
      localStorage.setItem('prefers-color', scheme);
  }

  private getColorScheme(): void {
      const localStorageColorScheme = localStorage.getItem('prefers-color');
      if (localStorageColorScheme) {
          this.colorSchemeSubject.next(localStorageColorScheme);
      } else {
          this.detectPrefersColorScheme();
      }
  }

  load(): void {
      this.getColorScheme();
      this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorSchemeSubject.value);
  }

  update(scheme: string): void {
      this.setColorScheme(scheme);
      this.renderer.removeClass(document.body, this.colorSchemePrefix + (this.colorSchemeSubject.value === 'dark' ? 'light' : 'dark'));
      //this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
      this.load();
  }

  currentActive(): Observable<string> {
      return this.colorSchemeSubject.asObservable();
  }
}
