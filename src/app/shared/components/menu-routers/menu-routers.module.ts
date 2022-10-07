import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutersComponent } from './menu-routers.component';

@NgModule({
  declarations: [MenuRoutersComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuRoutersComponent]
})
export class MenuRoutersModule { }
