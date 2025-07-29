// src/app/cards/cards.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importe CardMainComponent (ajuste o caminho se necessário, assumindo que está em uma pasta irmã)
import { CardMainComponent } from '../card-main/card-main.component';

// Importe os Módulos do Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; // Necessário para matButton

// Inclua também outros componentes que você já tinha neste módulo
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';


@NgModule({
  declarations: [
    // Liste TODOS os componentes que pertencem a este módulo aqui
    CardMainComponent, // <-- MOVA CardMainComponent PARA CÁ!
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule,
    // Importe os módulos do Angular Material aqui, pois CardMainComponent os usa
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // Exporte os componentes que você quer que estejam disponíveis para outros módulos (como o AppModule)
    CardMainComponent, // <-- EXPORTE CardMainComponent
    CardComponent,
    CardRoxoComponent,
  ]
})
export class CardsModule { }