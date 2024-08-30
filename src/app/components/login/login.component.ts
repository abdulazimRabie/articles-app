import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  get isButtonDisabled(): boolean {
    return !this.email || !this.password || this.isSubmitting;
  }

  login(): void {
    if (this.isButtonDisabled) {
      return;
    }

    this.isSubmitting = true;

    this.http.post<{ status: string; message: string; data: any }>('http://localhost:3000/api/authors/login', {
      username: this.email,
      password: this.password
    }).subscribe(
      response => {
        if (response.status === 'SUCCESS') {
          localStorage.setItem('token', response.data.author.token);
          localStorage.setItem('author', JSON.stringify(response.data.author));
          this.router.navigate(['']); // Navigate to the appropriate route
        } else {
          console.log("FAIIIIIILD")
          console.error('Login failed:', response.message);
        }
        this.isSubmitting = false;
      },
      error => {
        console.error('Login error:', error);
        this.isSubmitting = false;
      }
    );
  }
}

