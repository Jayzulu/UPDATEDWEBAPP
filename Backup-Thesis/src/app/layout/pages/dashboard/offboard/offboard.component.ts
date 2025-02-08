import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-offboard',
  templateUrl: './offboard.component.html',
  styleUrl: './offboard.component.scss'
})
export class OffboardComponent {

  offboardingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.offboardingForm = this.fb.group({
      name: [''],
      effectiveDate: [''],
      clearanceForm: [''],
      certifications: [''],
      exitInterview: [''],
      automatedNotification: [''],
      personalEmail: ['']
    });
  }

  submitForm() {
    console.log('Form Data:', this.offboardingForm.value);
    }
}