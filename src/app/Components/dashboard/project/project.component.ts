import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
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
