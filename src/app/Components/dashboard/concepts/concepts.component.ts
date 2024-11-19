import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrl: './concepts.component.css'
})
export class ConceptsComponent {
  userName=''
  constructor(public authService: AuthServiceService) {}

  getUsername() {
    this.userName = this.authService.getUsername();
    return this.userName;
  }
  isSidebarOpen = true;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
