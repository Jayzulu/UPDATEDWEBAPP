import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sed',
  templateUrl: './sed.component.html',
  styleUrl: './sed.component.scss'
})
export class SedComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigateByUrl('/dashboard/distribution');
  }
}
