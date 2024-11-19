import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-depi-points',
  templateUrl: './depi-points.component.html',
  styleUrl: './depi-points.component.css'
})
export class DepiPointsComponent {
  constructor ( public authService: AuthServiceService) {}


}
