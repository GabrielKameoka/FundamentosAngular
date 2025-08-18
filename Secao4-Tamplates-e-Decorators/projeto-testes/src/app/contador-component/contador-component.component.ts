import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.scss']
})
export class ContadorComponentComponent {
  @Output("Contador") ContadorEmitter = new EventEmitter<number>();
  valor = 0;

  AumentarContador(){
    this.valor ++
    this.ContadorEmitter.emit(this.valor);
  }

  DiminuiContador(){
    this.valor --
    this.ContadorEmitter.emit(this.valor)
  }

  ResetaContador(){
    this.valor = 0;
    this.ContadorEmitter.emit(this.valor);
  }
}
