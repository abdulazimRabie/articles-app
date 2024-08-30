import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IArticle } from '../../models/iarticle';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  faArrow = faArrowRight;
  articles: IArticle[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    this.http.get<any>('http://localhost:3000/api/articles?limit=10').subscribe({
      next: (response) => {
        this.articles = response.data.articles;
      },
      error: (error) => {
        console.error('Failed to fetch articles', error);
      },
    });
  }

  // Function to navigate to the article component
  viewArticle(articleId: string): void {
    this.router.navigate(['/article', articleId]);
  }
}
