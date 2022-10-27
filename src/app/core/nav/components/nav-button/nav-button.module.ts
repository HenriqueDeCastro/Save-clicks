import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [NavButtonComponent]
})
export class NavButtonModule { }
