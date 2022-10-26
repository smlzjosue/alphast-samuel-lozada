import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { SessionService } from 'src/app/core/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.user === '' && this.password === '') {
      window.alert('Debe ingresar los datos de usuario para continuar');
      return;
    } else {
      this.loginService.login().subscribe((resp: any) => {
        console.log(resp);
        if (
          resp.loginData.userName !== this.user ||
          resp.loginData.password !== this.password
        ) {
          this.clearData()
          window.alert('Usuario invalido por favor verifique la informacion');
        } else {
          sessionStorage.setItem('isLogged', 'true');
          sessionStorage.setItem('user', JSON.stringify(resp.loginData));
          this.router.navigate(['home']);
        }
      });
    }
  }

  clearData() {
    this.user = '';
    this.password = '';
  }
}
