import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  isSubmitting: boolean = false; 
  articles: string[] = [];

  avatars: string[] = [
    'assets/avatars/avatar_green.png',
    'assets/avatars/avatar_blue.png',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      bio: ['', Validators.required], 
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
      this.isSubmitting = true; 

      const requestData = {
        firstName: this.registrationForm.get('firstName')?.value,
        lastName: this.registrationForm.get('lastName')?.value,
        email: this.registrationForm.get('email')?.value,
        username: this.registrationForm.get('username')?.value,
        password: this.registrationForm.get('password')?.value,
        bio: this.registrationForm.get('bio')?.value,
        topics: this.favoriteTopics,
        articles: this.articles, 
        image: '' 
      };

      // Make API call to register the author
      this.http.post('http://localhost:3000/api/authors/register', requestData).subscribe(
        (response: any) => {
          response = response.data.author;
          localStorage.clear();
          localStorage.setItem('author', JSON.stringify({
            firstName: response.firstName,
            lastName: response.lastName,
            username: response.username,
            id: response._id
          }));
          localStorage.setItem('token', response.token);
          console.log('Registration successful', response);
        },
        (error) => {
          console.error('Registration failed', error);
        },
        () => {
          this.isSubmitting = false; // Re-enable button after submission
        }
      );
    }
  }
}
