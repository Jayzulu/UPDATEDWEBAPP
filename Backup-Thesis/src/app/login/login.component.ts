import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  homepage() {
    this.email = this.email.trim();
    this.password = this.password.trim();

    if (!this.email || !this.password) {
      console.error('Email and password must not be empty');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      console.error('Invalid email format');
      return;
    }

    this.authService.login(this.email, this.password)
      .then(() => this.router.navigate(['/home']))
      .catch((error: any) => {
        console.error('Login failed', error);
      });
  }

  // Add this method to validate email format
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
