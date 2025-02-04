import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auditlogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auditlogs.component.html',
  styleUrl: './auditlogs.component.css'
})
export class AuditlogsComponent {

}
