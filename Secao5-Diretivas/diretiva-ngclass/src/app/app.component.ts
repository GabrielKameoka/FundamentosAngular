import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ListaAluno = [
    { nome: "Gabriel", nota: 10 },
    { nome: "Gabriella", nota: 11221 },
    { nome: "Fulano", nota: 6 },
  ];

  getColor(nota: number): string {
    if (nota > 7) {
      return 'green';
    } else {
      return 'red';
    }
  }

  isOrange: boolean = true;
}
