import { Component, Input } from '@angular/core';
import { DrawerService } from 'src/app/core/services/drawer/drawer.service';

@Component({
  selector: 'save-clicks-drawer-button',
  template: '<md-sys-icon-button [icon]="icon" (click)="showDrawer()"></md-sys-icon-button>'
})
export class DrawerButtonComponent {

  @Input() icon!: string;

  constructor(private drawerService: DrawerService) {}

  showDrawer(): void {
    this.drawerService.change();
  }
}
