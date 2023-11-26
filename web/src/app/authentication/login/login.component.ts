import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { IUserLogin } from './interfaces/userLogin.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthenticationService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  formGroup = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('',{
      validators: [Validators.required]
    }),
  });

  login = () => {
    this.authService.login(this.formGroup.getRawValue() as IUserLogin);
  }

  register = () => {
    // navigate to register page
    this.router.navigate(['auth/register'],{
      // relativeTo: this.route
    })
  }

}
