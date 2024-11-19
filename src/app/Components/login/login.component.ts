import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}
  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/track']);
    } else {
      this.errorMessage = 'Invalid Username / Password';
      this.router.navigate(['/']);
    }
  }



}
