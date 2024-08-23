import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  favoriteTopics: string[] = [];
  uploadedImage: File | null = null;
  selectedImage: string;

  // Array of avatar images (make sure these paths are correct)
  avatars: string[] = [
    'assets/avatars/avatar_green.png',
    'assets/avatars/avatar_blue.png',
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      topicInput: [''],
      image: [null]
    });

    // Set the default image
    this.selectedImage = this.avatars[0];
  }

  addTopic(): void {
    const topic = this.registrationForm.get('topicInput')?.value.trim();
    if (topic && !this.favoriteTopics.includes(topic)) {
      this.favoriteTopics.push(topic);
      this.registrationForm.get('topicInput')?.reset();
    }
  }

  removeTopic(topic: string): void {
    this.favoriteTopics = this.favoriteTopics.filter(t => t !== topic);
  }

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedImage = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.selectedImage = e.target.result;
      reader.readAsDataURL(file);
      this.registrationForm.patchValue({ image: file });
    }
  }

  onSelectAvatar(avatar: string): void {
    this.selectedImage = avatar;
    this.uploadedImage = null;
    this.registrationForm.patchValue({ image: null });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = new FormData();
      formData.append('email', this.registrationForm.get('email')?.value);
      formData.append('firstName', this.registrationForm.get('firstName')?.value);
      formData.append('lastName', this.registrationForm.get('lastName')?.value);
      formData.append('username', this.registrationForm.get('username')?.value);
      formData.append('password', this.registrationForm.get('password')?.value);
      formData.append('favoriteTopics', JSON.stringify(this.favoriteTopics));

      if (this.uploadedImage) {
        formData.append('image', this.uploadedImage);
      } else {
        formData.append('avatar', this.selectedImage); // Send avatar path instead
      }

      console.log('Form Data:', formData);
      // Handle form submission
    }
  }
}
