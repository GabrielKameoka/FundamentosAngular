// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module'; // <-- Certifique-se de que este caminho está correto

// REMOVA CardMainComponent daqui! Ele não deve ser importado diretamente.
// import { CardMainComponent } from './card-main/card-main.component'; // <-- DELETAR ESSA LINHA

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardsModule, // <-- Este módulo agora contém CardMainComponent e os módulos do Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }