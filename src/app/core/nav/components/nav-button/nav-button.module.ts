import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavButtonComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NavButtonComponent]
})
export class NavButtonModule { }
