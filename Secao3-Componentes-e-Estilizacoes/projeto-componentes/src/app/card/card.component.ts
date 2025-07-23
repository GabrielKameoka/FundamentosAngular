import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  //@ts-ignore
  plano;
}

//biding = é fazer a interpolação de uma propriedade da classe para o html