// app.routes.ts
import { Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CrearComponent } from './components/crear/crear.component';
import { ConsultarComponent } from './components/consultar/consultar.component';

export interface AppRouteData {
  title?: string;
}

export const routes: Routes = [
  { path: 'Consultar-todos', component: DataTableComponent, data: { title: 'Consultar todos' } as AppRouteData },
  { path: 'crear', component: CrearComponent, data: { title: 'Crear' } as AppRouteData },
  { path: 'consultar', component: ConsultarComponent, data: { title: 'Consultar' } as AppRouteData },

];
