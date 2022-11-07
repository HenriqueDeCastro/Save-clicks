import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSysDrawerComponent } from './md-sys-drawer.component';
import { DrawerButtonModule } from '../../components/drawer-button/drawer-button.module';
import { MdSysNavButtonModule } from '../md-sys-button/md-sys-nav-button/md-sys-nav-button.module';

@NgModule({
  declarations: [MdSysDrawerComponent],
  imports: [
    CommonModule,
    DrawerButtonModule,
    MdSysNavButtonModule
  ],
  exports: [MdSysDrawerComponent]
})
export class MdSysDrawerModule { }
