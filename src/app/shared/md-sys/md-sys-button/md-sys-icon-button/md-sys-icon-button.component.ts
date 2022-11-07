import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-icon-button',
  templateUrl: './md-sys-icon-button.component.html',
  styleUrls: ['./md-sys-icon-button.component.scss']
})
export class MdSysIconButtonComponent {

  @Input() icon!: string;
  @Input() outline!: boolean;
}
