import { FormsModule } from '@angular/forms';
import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluar',
  standalone: true,
  imports: [NgStyle, NgFor, FormsModule],
  templateUrl: './evaluar.component.html',
  styleUrl: './evaluar.component.css'
})
export class EvaluarComponent implements OnInit{
  //mostrarValores = false;

  ngOnInit() {
    this.compararColores();
  }
  
  coloresRGB: string[] = [
    'rgb(255, 128, 128)',
    'rgb(128, 128, 255)',
    'rgb(128, 128, 64)',
    'rgb(32, 255, 64)',
    'rgb(223, 223, 223)',
    'rgb(0, 0, 0)'
  ];

  indiceActual = 0;

  get colorActual(): string {
    return this.coloresRGB[this.indiceActual];
  }

  siguienteColor() {
    this.indiceActual = (this.indiceActual + 1) % this.coloresRGB.length;
  }

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
    this.compararColores();
  }

  quitarLuz(color: string): void {
    if (color === 'rojo' && this.rojo > 0) this.rojo--;
    if (color === 'verde' && this.verde > 0) this.verde--;
    if (color === 'azul' && this.azul > 0) this.azul--;
    this.compararColores();
  }

  getNivelArray(nivel: number): boolean[] {
    return Array(8).fill(false).map((_, i) => i < nivel);
  }

  mensaje = '';
  mensajeColor = '';

  compararColores() {
    if (this.normalizarRGB(this.colorActual) === this.normalizarRGB(this.colorResultado)) {
      this.mensaje = 'Lo lograste!';
      this.mensajeColor = 'green';
    } else {
      this.mensaje = 'Incorrecto';
      this.mensajeColor = 'red';
    }
  }

  normalizarRGB(rgb: string): string {
    let color = rgb.replace(/\s+/g, '').toLowerCase(); 
    console.log(color);
    return color; 
  }

}