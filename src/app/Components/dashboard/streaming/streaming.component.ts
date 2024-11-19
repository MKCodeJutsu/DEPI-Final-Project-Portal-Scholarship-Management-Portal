import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrl: './streaming.component.css'
})
export class StreamingComponent {
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
