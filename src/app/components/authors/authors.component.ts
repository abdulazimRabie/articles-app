import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAuthor } from '../../models/iauthor';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: IAuthor[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  // Fetch authors from the API
  fetchAuthors(): void {
    this.http.get<any>('http://localhost:3000/api/authors?limit=4')
      .subscribe(response => {
        if (response.status === 'success') {
          this.authors = response.data.authors;
        }
      }, error => {
        console.error('Error fetching authors:', error);
      });
  }

  // Function to navigate to the author's profile
  goToProfile(authorId: string): void {
    this.router.navigate(['profile', authorId]);
  }
}
