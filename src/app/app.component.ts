import { Component } from '@angular/core';
import { DataTableComponent } from "./components/data-table/data-table.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, SidebarComponent]
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  
}
