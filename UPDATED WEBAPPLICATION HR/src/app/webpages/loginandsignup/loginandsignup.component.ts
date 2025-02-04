import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loginandsignup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loginandsignup.component.html',
  styleUrl: './loginandsignup.component.css'
})
export class LoginandsignupComponent {
  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  constructor(private router: Router, private titleService: Title) {}

  homepage() {
    this.router.navigate(['/home']);
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  

}
