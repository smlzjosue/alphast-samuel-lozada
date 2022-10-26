import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!!).userName
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login'])
  }

}
