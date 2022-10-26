import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isLogged = false;
  constructor(
    private router: Router,
  ) { 
    this.checkIsLogged();
  }

  checkIsLogged() {
    if (sessionStorage.getItem('isLogged')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    return this.isLogged;
  }
}
