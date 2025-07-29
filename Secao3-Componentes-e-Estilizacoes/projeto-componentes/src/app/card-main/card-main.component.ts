// src/app/card-main/card-main.component.ts

import {ChangeDetectionStrategy, Component} from '@angular/core';
// REMOVA as importações de módulos do Material daqui:
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMainComponent {

}