import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsDashboardModule } from 'src/app/shared/components/cards-dashboard/cards-dashboard.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsDashboardModule
  ]
})
export class HomeModule { }
