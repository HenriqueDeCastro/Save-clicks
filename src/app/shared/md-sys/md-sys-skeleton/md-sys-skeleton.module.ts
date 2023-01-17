import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSysSkeletonComponent } from './md-sys-skeleton.component';
import { MdSysCardModule } from '../md-sys-card/md-sys-card.module';

@NgModule({
  declarations: [MdSysSkeletonComponent],
  imports: [
    CommonModule,
    MdSysCardModule
  ],
  exports: [MdSysSkeletonComponent]
})
export class MdSysSkeletonModule { }
