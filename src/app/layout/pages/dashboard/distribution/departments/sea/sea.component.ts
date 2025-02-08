import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrl: './sea.component.scss'
})
export class SeaComponent {
  constructor(private router: Router) { }
  goBack() {
    this.router.navigateByUrl('/dashboard/distribution');
  }
}
