import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRoutersComponent } from './button-routers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ButtonRoutersComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  exports: [ButtonRoutersComponent]
})
export class ButtonRoutersModule { }
