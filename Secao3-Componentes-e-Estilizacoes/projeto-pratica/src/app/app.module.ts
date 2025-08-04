import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CardMainContentComponent } from './card-main-content/card-main-content.component';
import { ButtonSimComponent } from './button-sim/button-sim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    CardMainContentComponent,
    ButtonSimComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
