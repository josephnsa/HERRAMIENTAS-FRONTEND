import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';
import { ApiCoreService } from '../shared/service/api-core.service';
import { ENDPOINTS } from '../shared/enpoints';

@Injectable({ providedIn: 'root' })
export class VehiculosService {

  constructor(private api: ApiCoreService) { }

  consultarTodos(): Observable<Vehiculo[]> {
    return this.api.get<Vehiculo[]>(ENDPOINTS.vehiculos.consultarTodos);
  }

  consultarPorId(id: number): Observable<Vehiculo> {
    return this.api.get<Vehiculo>(ENDPOINTS.vehiculos.consultarPorId(id));
  }

  registrar(data: Vehiculo): Observable<Vehiculo> {
    return this.api.post<Vehiculo>(ENDPOINTS.vehiculos.registrar, data);
  }

  actualizar(data: Vehiculo): Observable<Vehiculo> {
    return this.api.put<Vehiculo>(ENDPOINTS.vehiculos.actualizar, data);
  }

  eliminar(id: number) {
    const body = { vehiculoId: id };
    return this.api.deleteWithBody('/Vehiculos/Eliminar', body);
  }

}
