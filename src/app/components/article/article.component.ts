import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  article: any; 

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router : Router
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.fetchArticle(articleId);
    }
  }

  fetchArticle(articleId: string): void {
    this.http.get<any>(`http://localhost:3000/api/articles/${articleId}?limit=20`).subscribe({
      next: (response) => {
        this.article = response.data.article; 
      },
      error: (error) => {
        console.error('Failed to fetch the article', error);
      },
    });
  }

  openProfile() {
    this.router.navigate(["/profile", this.article.author.id])
  }
}
