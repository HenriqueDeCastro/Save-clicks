import { NgModule } from '@angular/core';
import { MdSysNavButtonModule } from './md-sys-nav-button/md-sys-nav-button.module';

@NgModule({
  imports: [
    MdSysNavButtonModule,
  ],
  exports: [
    MdSysNavButtonModule
  ]
})
export class MdSysButtonModule { }
