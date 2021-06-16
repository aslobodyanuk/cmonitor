import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isAuthenticated: boolean = true;

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  login() {
    this._isAuthenticated = true;
    this.router.navigateByUrl('');
  }

  logout() {
    this._isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }
}
