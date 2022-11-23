import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSysDrawerComponent } from './md-sys-drawer.component';
import { DrawerButtonModule } from '../../components/drawer-button/drawer-button.module';
import { MdSysNavButtonModule } from '../md-sys-button/md-sys-nav-button/md-sys-nav-button.module';
import { ThemeButtonModule } from '../../components/theme-button/theme-button.module';

@NgModule({
  declarations: [MdSysDrawerComponent],
  imports: [
    CommonModule,
    DrawerButtonModule,
    MdSysNavButtonModule,
    ThemeButtonModule
  ],
  exports: [MdSysDrawerComponent]
})
export class MdSysDrawerModule { }
