import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { MdSysScrimModule } from './shared/md-sys/md-sys-scrim/md-sys-scrim.module';
import { MdSysDrawerModule } from './shared/md-sys/md-sys-drawer/md-sys-drawer.module';
import { NavModule } from './core/nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    NavModule,
    MdSysScrimModule,
    MdSysDrawerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
