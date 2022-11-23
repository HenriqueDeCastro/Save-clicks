import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSysNavButtonComponent } from './md-sys-nav-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MdSysNavButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [MdSysNavButtonComponent]
})
export class MdSysNavButtonModule { }
