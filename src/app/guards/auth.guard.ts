import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private route: Router) {}

  canActivate(): boolean {
    if (this.authService.getPassword()) {
      return true;
    }

    this.route.navigate(['/home']);
    return false;
  }
}
