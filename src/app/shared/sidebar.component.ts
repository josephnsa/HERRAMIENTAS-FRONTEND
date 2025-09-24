import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';   // 👈 importa NgFor
import { routes } from '../app.routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],  
  template: `
    <aside class="w-64 bg-white border-r shadow-sm">
      <nav class="p-4 space-y-2">
        <ng-container *ngFor="let item of menuRoutes">
          <a [routerLink]="['/', item.path]"
             routerLinkActive="bg-gray-100 font-semibold"
             class="block px-3 py-2 rounded hover:bg-gray-100">
            {{ item.data?.['title'] }}
          </a>
        </ng-container>
      </nav>
    </aside>
  `
})
export class SidebarComponent {
  menuRoutes = routes.filter(r => r.data?.['title']);
}
