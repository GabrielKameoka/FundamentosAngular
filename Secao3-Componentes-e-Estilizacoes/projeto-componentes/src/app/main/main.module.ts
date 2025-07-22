import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMainComponent } from '../card-main/card-main.component';



@NgModule({
  declarations: [
    CardMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardMainComponent
  ]
})
export class MainModule { }
