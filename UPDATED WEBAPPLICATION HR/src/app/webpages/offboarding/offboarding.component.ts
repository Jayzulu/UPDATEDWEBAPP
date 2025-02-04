import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-offboarding',
  standalone: true,
  imports: [],
  templateUrl: './offboarding.component.html',
  styleUrl: './offboarding.component.css'
})
export class OffboardingComponent {
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