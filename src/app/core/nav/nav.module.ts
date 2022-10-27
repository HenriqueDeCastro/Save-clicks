import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavButtonModule } from './components/nav-button/nav-button.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavButtonModule, MatButtonModule, MatIconModule],
  exports: [NavComponent]
})
export class NavModule { }
