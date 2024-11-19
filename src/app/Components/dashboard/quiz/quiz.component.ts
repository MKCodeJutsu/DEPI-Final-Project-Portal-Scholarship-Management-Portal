import { Component } from '@angular/core';
import { AuthServiceService } from '../../../services/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',

})
export class QuizComponent {
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
