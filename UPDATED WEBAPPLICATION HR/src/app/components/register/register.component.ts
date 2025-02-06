import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  fullName: string = ''; 

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password, this.fullName)
      .then(user => console.log("Registered successfully:", user))
      .catch(error => console.error("Registration error:", error));
  }
}
