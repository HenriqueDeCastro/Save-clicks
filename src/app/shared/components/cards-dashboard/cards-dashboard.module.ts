import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDashboardComponent } from './cards-dashboard.component';

@NgModule({
  declarations: [CardsDashboardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CardsDashboardComponent]
})
export class CardsDashboardModule { }
