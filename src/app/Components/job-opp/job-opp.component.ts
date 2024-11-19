import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-job-opp',
  templateUrl: './job-opp.component.html',
  styleUrl: './job-opp.component.css'
})
export class JobOppComponent {
  constructor ( public authService: AuthServiceService) {}


}
