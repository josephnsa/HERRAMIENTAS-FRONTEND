import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { Vehiculo } from '../../models/vehiculo';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, FormsModule,SharedModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  filteredVehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
  }


}
