import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<string>();

 onButtonClick(){
  console.log("logando");

  this.buttonClickEmitter.emit("eu amo a minha namorada");
 }
}