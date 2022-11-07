import { Component, Input } from '@angular/core';
import { DrawerService } from '@services/services/drawer/drawer.service';

@Component({
  selector: 'md-sys-drawer',
  templateUrl: './md-sys-drawer.component.html',
  styleUrls: ['./md-sys-drawer.component.scss']
})
export class MdSysDrawerComponent {

  @Input() show!: boolean;

  constructor(private drawerService: DrawerService) {}

  changeStatusDrawer(): void {
    this.drawerService.change();
  }
}
