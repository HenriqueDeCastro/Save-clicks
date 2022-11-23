import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerButtonComponent } from './drawer-button.component';
import { MdSysIconButtonModule } from '../../md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

@NgModule({
  declarations: [DrawerButtonComponent],
  imports: [CommonModule, MdSysIconButtonModule],
  exports: [DrawerButtonComponent]
})
export class DrawerButtonModule { }
