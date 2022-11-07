import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-nav-button',
  templateUrl: './md-sys-nav-button.component.html',
  styleUrls: ['./md-sys-nav-button.component.scss']
})
export class MdSysNavButtonComponent {

  @Input() icon!: string;
  @Input() label!: string;
  @Input() extended!: boolean;
  @Input() route!: string;
}
