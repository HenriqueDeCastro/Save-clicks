import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutersComponent } from './menu-routers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuRoutersComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [MenuRoutersComponent]
})
export class MenuRoutersModule { }
