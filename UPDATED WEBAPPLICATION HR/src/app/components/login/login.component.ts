import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // Mark component as standalone
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    
    this.authService.login(this.email, this.password)
      .then(user => {
        console.log("Logged in successfully:", user);
      })
      .catch(error => {
        console.error("Login error:", error);
      });
  }
}
