import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MdSysNavigationModule } from 'src/app/shared/md-sys/md-sys-navigation/md-sys-navigation.module';
import { MdSysNavButtonModule } from 'src/app/shared/md-sys/md-sys-button/md-sys-nav-button/md-sys-nav-button.module';
import { ThemeButtonModule } from 'src/app/shared/components/theme-button/theme-button.module';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MdSysNavigationModule,
    MdSysNavButtonModule,
    ThemeButtonModule,
    DrawerButtonModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
