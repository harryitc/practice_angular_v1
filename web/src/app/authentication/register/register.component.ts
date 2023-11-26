import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserRegister } from './interfaces/userRegister.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private authService = inject(AuthenticationService);

  formGroup = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    username: new FormControl('',{
      validators: [Validators.required]
    }),
    password: new FormControl('',{
      validators: [Validators.required]
    }),
  });

  register = () => {
    this.authService.register(this.formGroup.getRawValue() as IUserRegister);
  }
}
