import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-publish-article',
  templateUrl: './publish-article.component.html',
  styleUrls: ['./publish-article.component.css']
})
export class PublishArticleComponent implements OnInit {
  categories: string[] = [];
  articleContent: string = '';
  articleTitle: string = '';
  articleDescription: string = '';
  visibility: string = 'Public';

  author: {
    firstName: string,
    lastName: string,
    username: string,
    id: string,
    token: string;
  } = {
    firstName: "",
    lastName: "",
    username: "",
    id: "",
    token: ""
  };

  constructor(private http: HttpClient) {
    const authorString = localStorage.getItem("author");
    if (authorString) {
      this.author = JSON.parse(authorString);
    }
  }

  init = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table code help wordcount'
  };

  addCategory(event: KeyboardEvent | any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (event.key === 'Enter' && value && !this.categories.includes(value)) {
      this.categories.push(value);
      input.value = '';
      event.preventDefault();
    }
  }

  removeCategory(category: string): void {
    this.categories = this.categories.filter(c => c !== category);
  }

  // Method to publish the article
  publishArticle(): void {
    const articleData = {
      title: this.articleTitle,
      description: this.articleDescription,
      content: this.articleContent,
      topics: this.categories,
      visibility: this.visibility.toLowerCase()
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.author.token}`
    });

    this.http.post('http://localhost:3000/api/articles', articleData, { headers })
      .subscribe(
        (response) => {
          console.log('Article published:', response);
          // Handle success (e.g., show success message, navigate, etc.)
        },
        (error) => {
          console.log(articleData)
          console.error('Error publishing article:', error);
          // Handle error (e.g., show error message)
        }
      );
  }

  // Check if the form is valid
  isFormValid(): boolean {
    return this.articleTitle.trim() !== '' && 
           this.articleDescription.trim() !== '' && 
           this.articleContent.trim() !== '';
  }

  ngOnInit(): void {}
}
