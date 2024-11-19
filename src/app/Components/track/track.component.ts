import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrl: './track.component.css',
})
export class TrackComponent {
  constructor(public authService: AuthServiceService) {}
}
