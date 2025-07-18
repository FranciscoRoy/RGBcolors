import { Component } from '@angular/core';

@Component({
  selector: 'app-comparar',
  standalone: true,
  imports: [],
  templateUrl: './comparar.component.html',
  styleUrl: './comparar.component.css'
})
export class CompararComponent {
  coloresRGB_1: string[] = [
    'rgb(255, 0, 0)',
    'rgb(0, 128, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(255, 128, 192)',
    'rgb(0, 255, 255)',
    'rgb(255, 128, 0)'
  ];

    coloresRGB_2: string[] = [
    'rgb(255, 96, 0)',
    'rgb(96, 128, 64)',
    'rgb(160, 128, 192)',
    'rgb(192, 255, 64)',
    'rgb(192, 160, 160)',
    'rgb(0, 128, 128)',
    'rgb(224, 192, 160)'
  ];

  indiceActual = 0;

  get colorActual_1(): string {
    return this.coloresRGB_1[this.indiceActual];
  }
    get colorActual_2(): string {
    return this.coloresRGB_2[this.indiceActual];
  }

  siguienteColor() {
    this.indiceActual = (this.indiceActual + 1) % this.coloresRGB_1.length;
  }
}
