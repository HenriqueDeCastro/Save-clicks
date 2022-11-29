import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-card',
  templateUrl: './md-sys-card.component.html',
  styleUrls: ['./md-sys-card.component.scss']
})
export class MdSysCardComponent {

  @Input() type: string;
  @Input() color: string;
  @Input() disabled: boolean;
  @Input() alert: boolean;

  constructor() {
    this.type = 'elevated';
    this.color = 'surface';
    this.disabled = false;
    this.alert = false;
  }
}
