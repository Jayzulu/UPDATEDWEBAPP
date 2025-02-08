import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-soc',
  templateUrl: './soc.component.html',
  styleUrl: './soc.component.scss'
})
export class SocComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigateByUrl('/dashboard/distribution');
  }
}
