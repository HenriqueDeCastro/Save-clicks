import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSysAlertComponent } from './md-sys-alert.component';
import { MdSysCardModule } from '../md-sys-card/md-sys-card.module';

@NgModule({
  declarations: [MdSysAlertComponent],
  imports: [CommonModule, MdSysCardModule],
  exports: [MdSysAlertComponent]
})
export class MdSysAlertModule { }
