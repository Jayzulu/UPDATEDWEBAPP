import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ccjef',
  templateUrl: './ccjef.component.html',
  styleUrl: './ccjef.component.scss'
})
export class CcjefComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigateByUrl('/dashboard/distribution');
  }
}
