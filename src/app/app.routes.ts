import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CompararComponent } from './comparar/comparar.component';
import { MezclarComponent } from './mezclar/mezclar.component';
import { EvaluarComponent } from './evaluar/evaluar.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'comparar', component: CompararComponent },
  { path: 'mezclar', component: MezclarComponent },
  { path: 'evaluar', component: EvaluarComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];