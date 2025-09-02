import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textoDinamico = "meu texto";
  isDisable = true;
  typeInput = "text";

  enableInput(){
    this.isDisable = false;
  }

  disableInput(){
    this.isDisable = true;
  }

  passwordInput(){
    this.typeInput = "password";
  }

  textInput(){
    this.typeInput = "text";
  }

  contador = 0;

  contaClick(){
    this.contador++;
  }

  buttonDisable = false;

  widthbutton = 130;
  backgroundColor = 'pink';

  isRedButton = true;
  isGreen = true;

  nome = "Gabriella Bezerra Batista";
  textoButton1 = "SIM";
  textoButton2 = "Claro dã"
  texto = "quero me casar com você."



  valorDoFilho = 0;

  onContador(valorAtual: number){
    this.valorDoFilho = valorAtual;
  }





  valorReal: number = 0;
  valorDolar: number = 0;
  
  ConverteDolar(event: number){
    this.valorDolar = this.valorReal * 5,48;
  }

}