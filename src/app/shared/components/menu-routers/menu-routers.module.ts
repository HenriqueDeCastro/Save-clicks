import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutersComponent } from './menu-routers.component';
import { ButtonRoutersModule } from '../button-routers/button-routers.module';

@NgModule({
  declarations: [MenuRoutersComponent],
  imports: [
    CommonModule,
    ButtonRoutersModule
  ],
  exports: [MenuRoutersComponent]
})
export class MenuRoutersModule { }
