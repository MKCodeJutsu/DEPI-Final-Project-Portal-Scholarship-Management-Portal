import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private authService: AuthServiceService, private router: Router) {}

  /************************************
      Route Guard - canActivate
 ***********************************/

/*
   The `canActivate` method is used to protect routes.
   It checks if the user is authenticated before allowing access to certain routes.
*/
canActivate(): boolean {

  // If the user is NOT authenticated
  if (!this.authService.isAuthenticated()) {

    // Redirect the user to the home page (or login page)
    this.router.navigate(['/']);

    // Deny access to the requested route
    return false;
  }

  // If the user is authenticated, allow access to the route
  return true;
}

}
