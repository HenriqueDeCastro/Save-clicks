import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  private renderer: Renderer2;
  private colorScheme!: string;
  private colorSchemePrefix: string;

  constructor(rendererFactory: RendererFactory2) {
      this.colorSchemePrefix = 'color-scheme-'
      this.renderer = rendererFactory.createRenderer(null, null);
  }

  private detectPrefersColorScheme() {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
          this.colorScheme = 'dark';
      }
  }

  private setColorScheme(scheme: string) {
      this.colorScheme = scheme;
      localStorage.setItem('prefers-color', scheme);
  }

  private getColorScheme() {
      const localStorageColorScheme = localStorage.getItem('prefers-color');
      if (localStorageColorScheme) {
          this.colorScheme = localStorageColorScheme;
      } else {
          this.detectPrefersColorScheme();
      }
  }

  load() {
      this.getColorScheme();
      this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorScheme);
  }

  update(scheme: string) {
      this.setColorScheme(scheme);
      this.renderer.removeClass(document.body, this.colorSchemePrefix + (this.colorScheme === 'dark' ? 'light' : 'dark'));
      this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
  }

  currentActive() {
      return this.colorScheme;
  }
}
