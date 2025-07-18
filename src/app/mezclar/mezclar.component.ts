import { FormsModule } from '@angular/forms';
import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mezclar',
  standalone: true,
  imports: [NgStyle, NgFor, FormsModule],
  templateUrl: './mezclar.component.html',
  styleUrl: './mezclar.component.css'
})
export class MezclarComponent {
  //mostrarValores = false;
  
  rojo = 0;   // de 0 a 8
  verde = 0;
  azul = 0;

  get colorResultado(): string {
    const r = Math.round(this.rojo * 255 / 8);
    const g = Math.round(this.verde * 255 / 8);
    const b = Math.round(this.azul * 255 / 8);
    return `rgb(${r}, ${g}, ${b})`;
  }

  agregarLuz(color: string): void {
    if (color === 'rojo' && this.rojo < 8) this.rojo++;
    if (color === 'verde' && this.verde < 8) this.verde++;
    if (color === 'azul' && this.azul < 8) this.azul++;
  }

  quitarLuz(color: string): void {
    if (color === 'rojo' && this.rojo > 0) this.rojo--;
    if (color === 'verde' && this.verde > 0) this.verde--;
    if (color === 'azul' && this.azul > 0) this.azul--;
  }

  getNivelArray(nivel: number): boolean[] {
    return Array(8).fill(false).map((_, i) => i < nivel);
  }
}
