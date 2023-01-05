import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MdSysIconButtonModule } from 'src/app/shared/md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MdSysIconButtonModule,
    DrawerButtonModule,
    RouterModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
