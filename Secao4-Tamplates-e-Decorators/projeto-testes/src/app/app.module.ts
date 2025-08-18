import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonSimComponent } from './button-sim/button-sim.component';
import { CardDeclaracaoComponent } from './card-declaracao/card-declaracao.component';
import { ContadorComponentComponent } from './contador-component/contador-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonSimComponent,
    CardDeclaracaoComponent,
    ContadorComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
