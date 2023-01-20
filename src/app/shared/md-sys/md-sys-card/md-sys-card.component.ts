import { Component, Input } from '@angular/core';
import { mdSysCard } from '../../classes/types';

@Component({
  selector: 'md-sys-card',
  templateUrl: './md-sys-card.component.html',
  styleUrls: ['./md-sys-card.component.scss']
})
export class MdSysCardComponent {

  @Input() type: mdSysCard;
  @Input() color: string;
  @Input() disabled: boolean;
  @Input() alert: boolean;
  @Input() loading: boolean;
  @Input() flex!: string;

  constructor() {
    this.type = 'elevated';
    this.color = 'surface';
    this.disabled = false;
    this.alert = false;
    this.loading = false;
  }
}
