import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private elementRef: ElementRef, private authService: AuthService) {}

    @Input() collapsed = false;
    @Input() screenWidth = 0;
    @ViewChild('accountContainer') accountContainer!: ElementRef;
    showAccount = false;

    toggleAccount(event: Event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to document
      this.showAccount = !this.showAccount;
    }

    onboard() {
      this.router.navigate(['/dashboard/onboard']);
    }

    offboard() {
      this.router.navigate(['/dashboard/offboard']);
    }

    openAccountSettings() {
      console.log('Open Account Settings');
    }

    logout() {
      this.authService.logout();
      console.log('Logout');
      this.router.navigate(['/login']);
    }

    homepage() {
      this.router.navigate(['/home']);
    }

    @HostListener('document:click', ['$event'])
    closePopups(event: Event) {
      if (this.accountContainer) {
        const clickedInsideAccount = this.accountContainer.nativeElement.contains(event.target);

        if (!clickedInsideAccount) {
          this.showAccount = false;
        }
      }
    }

}
