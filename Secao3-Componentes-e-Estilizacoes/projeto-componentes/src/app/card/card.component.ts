import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  }
}

//biding = é fazer a interpolação de uma propriedade da classe para o html