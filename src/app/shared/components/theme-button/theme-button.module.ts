import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeButtonComponent } from './theme-button.component';
import { MdSysIconButtonModule } from '../../md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

@NgModule({
  declarations: [ThemeButtonComponent],
  imports: [CommonModule, MdSysIconButtonModule],
  exports: [ThemeButtonComponent]
})
export class ThemeButtonModule { }
