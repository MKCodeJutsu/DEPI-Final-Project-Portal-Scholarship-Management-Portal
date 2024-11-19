import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

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
