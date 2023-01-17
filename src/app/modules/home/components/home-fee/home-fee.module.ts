import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeeComponent } from './home-fee.component';
import { MdSysSkeletonModule } from 'src/app/shared/md-sys/md-sys-skeleton/md-sys-skeleton.module';

@NgModule({
  declarations: [HomeFeeComponent],
  imports: [
    CommonModule,
    MdSysSkeletonModule
  ],
  exports: [HomeFeeComponent]
})
export class HomeFeeModule { }
