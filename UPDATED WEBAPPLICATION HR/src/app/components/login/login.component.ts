import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Import your AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';   // Bind email
  password: string = ''; // Bind password
  passwordFieldType: string = 'password';  // Toggle password visibility

  constructor(private authService: AuthService) {}

  // Handle login logic
  login() {
    this.authService.login(this.email, this.password)
      .then(user => {
        console.log("Logged in successfully:", user);
      })
      .catch(error => {
        console.error("Login error:", error);
      });
  }
}
