import { Component, Input } from '@angular/core';
import { mdSysSkeleton } from '../../classes/types';

@Component({
  selector: 'md-sys-skeleton',
  templateUrl: './md-sys-skeleton.component.html',
  styleUrls: ['./md-sys-skeleton.component.scss']
})
export class MdSysSkeletonComponent {

  @Input() appearance: mdSysSkeleton;
  @Input() height: string;

  constructor() {
    this.appearance = 'text';
    this.height = '100px';
  }
}
