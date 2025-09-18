import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: Date;
  salary: number;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  sortField: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit() {
    // Datos de ejemplo
    this.users = [
      { id: 1, name: 'Juan Pérez', email: 'juan@email.com', role: 'Developer', status: 'active', joinDate: new Date('2023-01-15'), salary: 50000 },
      { id: 2, name: 'María García', email: 'maria@email.com', role: 'Designer', status: 'active', joinDate: new Date('2023-02-20'), salary: 45000 },
      { id: 3, name: 'Carlos López', email: 'carlos@email.com', role: 'Manager', status: 'inactive', joinDate: new Date('2022-11-10'), salary: 60000 },
      { id: 4, name: 'Ana Rodríguez', email: 'ana@email.com', role: 'Developer', status: 'active', joinDate: new Date('2023-03-05'), salary: 52000 },
      { id: 5, name: 'Pedro Martínez', email: 'pedro@email.com', role: 'QA', status: 'active', joinDate: new Date('2023-01-30'), salary: 48000 },
      { id: 6, name: 'Laura Sánchez', email: 'laura@email.com', role: 'Designer', status: 'inactive', joinDate: new Date('2022-12-15'), salary: 47000 },
      { id: 7, name: 'Miguel Torres', email: 'miguel@email.com', role: 'Developer', status: 'active', joinDate: new Date('2023-04-10'), salary: 51000 },
      { id: 8, name: 'Sofía Castro', email: 'sofia@email.com', role: 'Manager', status: 'active', joinDate: new Date('2023-05-01'), salary: 65000 },
      { id: 9, name: 'Diego Morales', email: 'diego@email.com', role: 'QA', status: 'inactive', joinDate: new Date('2023-02-10'), salary: 49000 },
      { id: 10, name: 'Elena Ruiz', email: 'elena@email.com', role: 'Designer', status: 'active', joinDate: new Date('2023-03-20'), salary: 46000 }
    ];

    this.filteredUsers = [...this.users];
  }

  // Filtrar datos
  filterData() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
  }

  // Ordenar datos
  sortData(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.filteredUsers.sort((a, b) => {
      const valueA = a[field as keyof User];
      const valueB = b[field as keyof User];
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' 
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      
      if (valueA instanceof Date && valueB instanceof Date) {
        return this.sortDirection === 'asc' 
          ? valueA.getTime() - valueB.getTime()
          : valueB.getTime() - valueA.getTime();
      }
      
      return this.sortDirection === 'asc' 
        ? (valueA as number) - (valueB as number)
        : (valueB as number) - (valueA as number);
    });
  }

  // Paginación
  get paginatedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Método para formatear fecha
  formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES');
  }
}