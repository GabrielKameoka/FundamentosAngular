import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-declaracao',
  templateUrl: './card-declaracao.component.html',
  styleUrls: ['./card-declaracao.component.scss']
})
export class CardDeclaracaoComponent {
  @Input('textoDeclaracao') textoParaExibir: string = "";
}
