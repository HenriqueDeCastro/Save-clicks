import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sys-scrim',
  templateUrl: './md-sys-scrim.component.html',
  styleUrls: ['./md-sys-scrim.component.scss']
})
export class MdSysScrimComponent {

  @Input() visible!: boolean;
}
