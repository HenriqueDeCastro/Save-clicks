import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MdSysCardModule } from 'src/app/shared/md-sys/md-sys-card/md-sys-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdSysCardModule
  ]
})
export class HomeModule { }
