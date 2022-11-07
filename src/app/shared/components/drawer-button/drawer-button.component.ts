import { Component, Input } from '@angular/core';
import { DrawerService } from '@services/services/drawer/drawer.service';

@Component({
  selector: 'f1-data-drawer-button',
  templateUrl: './drawer-button.component.html',
  styleUrls: ['./drawer-button.component.scss']
})
export class DrawerButtonComponent {

  @Input() icon!: string;

  constructor(private drawerService: DrawerService) {}

  showDrawer(): void {
    this.drawerService.change();
  }
}
