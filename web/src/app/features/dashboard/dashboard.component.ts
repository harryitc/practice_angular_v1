import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Router } from '@angular/router';
import { IUser } from '../../authentication/user.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private authenticationService = inject(AuthenticationService);

  private router = inject(Router);

  user: IUser | undefined | null;

  ngOnInit(): void {
    console.log('dashbaord');

    const local = localStorage.getItem('user');
    if (!local) {
      this.router.navigate(['auth']);
      return;
    }
    this.user = JSON.parse(local ?? '')?.user;
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
