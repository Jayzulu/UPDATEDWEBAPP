import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef   } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.scss'
})
export class OnboardComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  profileImage: string = 'assets/default-avatar.png'; // Default profile picture

  onFileSelect() {
    this.fileInput.nativeElement.click(); // Opens file selector
  }
  onUpload(): void {
    console.log('Upload button clicked');

  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
