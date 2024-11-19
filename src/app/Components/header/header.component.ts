import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor ( public authService: AuthServiceService) {}

}
