import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild('dropdownContent') dropdownContent!: ElementRef;
  isDropdownVisible: boolean = false;
  userName = ''

  constructor(public authService: AuthServiceService, private router: Router) {}

  logOut() {
    this.authService.logout(); // Call the logout method
    // Navigate to login directly after calling logout
    this.router.navigate(["/login"]);
  }
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.matches('.dropbtn') && this.isDropdownVisible) {
      this.isDropdownVisible = false;
    }
  }
  // Get UserName
  getUsername() {
    this.userName = this.authService.getUsername();
    return this.userName;
  }
}
