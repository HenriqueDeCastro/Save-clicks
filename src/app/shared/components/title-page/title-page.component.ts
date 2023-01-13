import { Component, Input } from '@angular/core';

@Component({
  selector: 'save-clicks-title-page',
  template: '<h1 class="title-large">{{label}}</h1>',
  styles: ['h1 { font-weight: bold; }']
})
export class TitlePageComponent {

  @Input() label!: string;
}
