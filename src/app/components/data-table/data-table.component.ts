import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { Vehiculo } from '../../models/vehiculo';
import { SharedModule } from '../../shared.module';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PanelMenuModule
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  filteredVehiculos: Vehiculo[] = [];
  cols: any;
  items: MenuItem[] = [];
  Modalvisible: boolean = false;

  vehiculoForm!: FormGroup;
  editMode: boolean = false;
  selectedVehiculo!: Vehiculo;

  constructor(
    private vehiculosService: VehiculosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.llamarvehiculo();

    this.cols = [
      { field: 'vehiculoId', header: 'ID Vehículo' },
      { field: 'seguroId', header: 'Seguro ID' },
      { field: 'placa', header: 'Placa' },
      { field: 'marca', header: 'Marca' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'anio', header: 'Año' },
      { field: 'numeroSerie', header: 'Número de Serie' }
    ];

    this.vehiculoForm = this.fb.group({
      vehiculoId: [null],
      seguroId: ['',],
      placa: [''],
      marca: [''],
      modelo: [''],
      anio: [''],
      numeroSerie: ['']
    });

    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-plus-circle",
        command: () => this.showSaveDialog()
      },
      {
        label: "Editar",
        icon: "pi pi-pencil",
        command: () => this.showEditDialog()
      },
      {
        label: "Eliminar",
        icon: "pi pi-times",
        command: () => this.showDeleteDialog()
      }
    ]
  }

  showSaveDialog() {
    this.editMode = false;
    this.vehiculoForm.reset();
    this.Modalvisible = true;
  }

  showEditDialog() {
    if (!this.selectedVehiculo) {
      alert("Seleccione un vehículo primero.");
      return;
    }
    this.editMode = true;
    this.vehiculoForm.patchValue(this.selectedVehiculo);
    this.Modalvisible = true;
  }

  registrarVehiculo() {
    const vehiculo = this.vehiculoForm.value;

    if (this.editMode) {

      this.vehiculosService.actualizar(vehiculo).subscribe({
        next: () => {
          this.llamarvehiculo();
          this.Modalvisible = false;
        },
        error: (err) => console.error("Error al actualizar:", err)
      });
    } else {

      this.vehiculosService.registrar(vehiculo).subscribe({
        next: () => {
          this.llamarvehiculo();
          this.Modalvisible = false;
        },
        error: (err) => console.error("Error al registrar:", err)
      });
    }
  }

  showDeleteDialog() {
    if (!this.selectedVehiculo) {
      alert("Seleccione un vehículo para eliminar.");
      return;
    }

    if (confirm(`¿Está seguro que desea eliminar el vehículo con placa ${this.selectedVehiculo.placa}?`)) {
      this.vehiculosService.eliminar(this.selectedVehiculo.vehiculoId).subscribe({
        next: () => {
          this.llamarvehiculo();
          alert("Vehículo eliminado correctamente.");
        },
        error: (err) => {
          console.error("Error al eliminar vehículo:", err);
          alert("No se pudo eliminar el vehículo.");
        }
      });
    }
  }

  llamarvehiculo() {
    this.vehiculosService.consultarTodos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.filteredVehiculos = [...this.vehiculos];
      },
      error: (err) => {
        console.log("error al cargar datos", err);
      }
    });
  }
}