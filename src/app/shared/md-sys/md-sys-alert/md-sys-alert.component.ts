import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-alert',
  templateUrl: './md-sys-alert.component.html',
  styleUrls: ['./md-sys-alert.component.scss']
})
export class MdSysAlertComponent {

  @Input() color: string;
  @Input() icon!: string;

  constructor() {
    this.color = 'primary';
  }
}
