import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private router: Router, private elementRef: ElementRef) {}
  
    @Input() collapsed = false;
    @Input() screenWidth = 0;
    @ViewChild('accountContainer') accountContainer!: ElementRef;
    showAccount = false;
  
    toggleAccount(event: Event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to document
      this.showAccount = !this.showAccount;
    }
  
    openAccountSettings() {
      console.log('Open Account Settings');
    }
  
    logout() {
      console.log('Logout');
      this.router.navigate(['/loginandsignup']);
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
