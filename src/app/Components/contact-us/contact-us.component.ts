import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor ( public authService: AuthServiceService) {}

}
