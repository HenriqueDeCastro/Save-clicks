import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesComponent } from './home-features.component';
import { MdSysCardModule } from 'src/app/shared/md-sys/md-sys-card/md-sys-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeFeaturesComponent],
  imports: [
    CommonModule,
    MdSysCardModule,
    RouterModule
  ],
  exports: [HomeFeaturesComponent]
})
export class HomeFeaturesModule { }
