import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_ENDPOINTS } from '../config/api.config';
import { IUserLogin } from './login/interfaces/userLogin.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRegister } from './register/interfaces/userRegister.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpClient = inject(HttpClient);
  // navigate
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  login = (userLogin: IUserLogin) => {

    const body = {
      user: userLogin,
    }

    return this.httpClient.post(API_ENDPOINTS.realworld + '/users/login', body)
      .subscribe(
        {
          next: async (res) => {

            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(res));

            await this.router.navigate(['']);
          },
          error: (err) => {
            localStorage.removeItem('user');
            return err;
          },
          complete: () => { },
        }
      )
  }

  register = (userRegister: IUserRegister) => {

    const body = {
      user: userRegister,
    }

    return this.httpClient.post(API_ENDPOINTS.realworld + '/users', body)
      .subscribe(
        {
          next: (res) => {

            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(res));

            // navigate to dashboard page
            this.router.navigate(['/']);
          },
          error: (err) => {
            localStorage.removeItem('user');
            return err;
          },
          complete: () => { },
        }
      )
  }

  logout = () => {
    localStorage.removeItem('user');
    // navigate to dashboard page
    this.router.navigate(['']);
  }

  getAuthorizationToken = (): string => {
    return 'Token ...';
  }

}
