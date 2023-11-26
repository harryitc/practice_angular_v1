import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  templateUrl: './authentication.component.html',
  imports: [CommonModule, RouterOutlet,
    //RouterLinkWithHref
  ],
  providers: [
    AuthenticationService,
  ],
})
export class AuthenticationComponent {

}
