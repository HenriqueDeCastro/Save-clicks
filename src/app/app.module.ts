import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './shared/components/toolbar/toolbar.module';
import { MenuRoutersModule } from './shared/components/menu-routers/menu-routers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MenuRoutersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
