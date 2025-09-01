import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    { id: 1, nome: "Celular" },
    { id: 2, nome: "TV" },
    { id: 3, nome: "Notebook" },
    { id: 4, nome: "Controle" },
    { id: 5, nome: "Teclado" },
    { id: 6, nome: "Mouse" },
    { id: 7, nome: "Processador" }
  ];

  pessoas = ["Gabriella", "João", "Maisa", "Edson", "Daniel"];

  users = [
    { userId: 101, name: 'João', email: 'joao@email.com' },
    { userId: 102, name: 'Maria', email: 'maria@email.com' }
  ];

  //para simular uma mudança de dados
  updateUsers(): void {
  this.users = [
    { userId: 101, name: 'João Silva', email: 'joao.silva@email.com' },
    { userId: 102, name: 'Maria Santos', email: 'maria.santos@email.com' },
    { userId: 103, name: 'Pedro Costa', email: 'pedro.costa@email.com' },
    { userId: 104, name: 'Ana Oliveira', email: 'ana@email.com' }
  ];
}

  trackByUserId(index: number, user: any): number {
    return user.userId;
  }
}
