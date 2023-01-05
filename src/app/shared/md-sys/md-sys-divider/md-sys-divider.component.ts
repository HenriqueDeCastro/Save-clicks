import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-divider',
  template: '<hr class="md-sys-divider">',
  styles: ['.md-sys-divider {   border-top: 1px solid var(--md-sys-color-outline-variant) }']
})
export class MdSysDividerComponent {

  @Input() variant: string;

  constructor() {
    this.variant = 'horizontal';
  }
}
