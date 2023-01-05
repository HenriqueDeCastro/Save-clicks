import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePresentationComponent } from './home-presentation.component';
import { MdSysCardModule } from 'src/app/shared/md-sys/md-sys-card/md-sys-card.module';
import { MdSysDividerModule } from 'src/app/shared/md-sys/md-sys-divider/md-sys-divider.module';

@NgModule({
  declarations: [HomePresentationComponent],
  imports: [CommonModule, MdSysCardModule, MdSysDividerModule],
  exports: [HomePresentationComponent]
})
export class HomePresentationModule { }
