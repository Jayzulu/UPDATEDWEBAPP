import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shtm',
  templateUrl: './shtm.component.html',
  styleUrl: './shtm.component.scss'
})
export class ShtmComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigateByUrl('/dashboard/distribution');
  }
}
