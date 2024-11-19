import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  constructor ( public authService: AuthServiceService) {}

}
