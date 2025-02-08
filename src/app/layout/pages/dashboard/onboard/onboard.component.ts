import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  profileImage: string = 'assets/default-avatar.png';
  selectedFile: File | null = null;

  formData = {
    name: '',
    email: '',
    employmentDate: '',
    employmentType: '',
    department: '',
    notification: '',
    profileImageUrl: ''
  };

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  onFileSelect() {
    this.fileInput.nativeElement.click();
  }

  uploadImage(event: any) {
    const file = event.target.files[0];

    // Allowed image types
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type! Only PNG, JPG, JPEG, and WEBP are allowed.');
      return;
    }

    if (file.size > maxSize) {
      alert('File size exceeds 2MB! Please upload a smaller image.');
      return;
    }

    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.profileImage = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      try {
        let uploadedImageUrl = '';

        // Upload image if selected
        if (this.selectedFile) {
          console.log('Uploading image...');
          const filePath = `profile_images/${new Date().getTime()}_${this.selectedFile.name}`;
          const fileRef = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, this.selectedFile);

          // Wait for upload to complete & get download URL
          uploadedImageUrl = await new Promise<string>((resolve, reject) => {
            task.snapshotChanges().pipe(
              finalize(() => {
                console.log('Image upload completed');
                fileRef.getDownloadURL().subscribe({
                  next: (url) => {
                    console.log('Image URL obtained:', url);
                    resolve(url);
                  },
                  error: (error) => {
                    console.error('Error getting download URL:', error);
                    reject(error);
                  }
                });
              })
            ).subscribe();
          });
        }

        // Prepare employee data
        const employeeData = {
          ...this.formData,
          profileImageUrl: uploadedImageUrl || 'assets/default-avatar.png', // Use default avatar if no image uploaded
          createdAt: new Date()
        };

        console.log('Saving employee data:', employeeData);

        // Save to Firestore
        const docRef = await this.firestore.collection('employees').add(employeeData);
        console.log('Document written with ID:', docRef.id);

        // Reset form
        form.resetForm();
        this.profileImage = 'assets/default-avatar.png';
        this.selectedFile = null;

        alert('Employee added successfully!');
      } catch (error) {
        console.error('Error in form submission:', error);
        alert('Error saving employee data. Please try again.');
      }
    } else {
      console.log('Form is invalid', form.errors);
    }
  }
}
