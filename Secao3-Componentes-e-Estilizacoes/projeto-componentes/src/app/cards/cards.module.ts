import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [//lista todos os componentes, directives que pertencem a este módulo para que o Angular saiba que eles existem
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [ //pega funcionalidades de outros módulos para este módulo
    CommonModule
  ],
  exports: [ //quais componentes, directives ou pipes declarados neste módulo você quer que fiquem visíveis e utilizáveis por outros módulos que importarem este mótulo
    CardComponent,
    CardRoxoComponent,
  ]
})
export class CardsModule { }
