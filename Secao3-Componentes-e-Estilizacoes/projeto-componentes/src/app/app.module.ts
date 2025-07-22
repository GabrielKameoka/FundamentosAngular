import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { CardMainComponent } from './card-main/card-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMainComponent,
    
  ],
  imports: [
    BrowserModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
