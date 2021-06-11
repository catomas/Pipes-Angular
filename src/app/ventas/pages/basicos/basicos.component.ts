import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {

  nombreLower: string = 'juan camilo';
  nombreUpper: string = 'JUAN CAMILO';
  nombreCompleto: string = 'JuAn caMiLO';

  fecha: Date = new Date();
}
