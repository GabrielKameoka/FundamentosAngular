import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-sim',
  templateUrl: './button-sim.component.html',
  styleUrls: ['./button-sim.component.scss']
})
export class ButtonSimComponent {
  @Input() texto: string = "";
}
