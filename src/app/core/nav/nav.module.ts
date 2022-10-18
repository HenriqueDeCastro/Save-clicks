import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavButtonModule } from './components/nav-button/nav-button.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavButtonModule],
  exports: [NavComponent]
})
export class NavModule { }
