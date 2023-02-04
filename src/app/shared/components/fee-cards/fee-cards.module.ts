import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeCardsComponent } from './fee-cards.component';
import { MdSysCardModule } from '../../md-sys/md-sys-card/md-sys-card.module';
import { MdSysSkeletonModule } from '../../md-sys/md-sys-skeleton/md-sys-skeleton.module';

@NgModule({
  declarations: [FeeCardsComponent],
  imports: [
    CommonModule,
    MdSysCardModule,
    MdSysSkeletonModule
  ],
  exports: [FeeCardsComponent]
})
export class FeeCardsModule { }
