import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFeaturesModule } from './components/home-features/home-features.module';
import { HomePresentationModule } from './components/home-presentation/home-presentation.module';
import { MdSysAlertModule } from 'src/app/shared/md-sys/md-sys-alert/md-sys-alert.module';
import { FeeCardsModule } from 'src/app/shared/components/fee-cards/fee-cards.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdSysAlertModule,
    HomeFeaturesModule,
    HomePresentationModule,
    FeeCardsModule
  ]
})
export class HomeModule { }
