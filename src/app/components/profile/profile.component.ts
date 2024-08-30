import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthor } from '../../models/iauthor';
import { IArticle } from '../../models/iarticle'; // Define this model for articles
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthServService } from '../../services/auth-serv.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faArrow = faArrowRight;
  isUserLoggedIn: boolean = false;
  author: IAuthor | null = null;
  articles: IArticle[] = []; // To hold the articles
  authorId: string | null = null;
  showLogoutBtn = false;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private router: Router,
    private authServ : AuthServService
  ) {
    this.isUserLoggedIn = authServ.isUserLogged;
  }

  ngOnInit(): void {
    // Extract authorId from the route
    this.route.paramMap.subscribe(params => {
      this.authorId = params.get('authorId');
      if (this.authorId) {
        this.getAuthor(this.authorId);
      }
    });
  }

  getAuthor(authorId: string): void {
    this.http.get<{ status: string; data: IAuthor }>(`http://localhost:3000/api/authors/${authorId}`)
      .subscribe(
        response => {
          this.author = response.data;
          if (this.author.articles.length > 0) {
            console.log("topics count of this author :", this.author.articles.length)
            this.getArticles(this.author.articles);
          }
        },
        error => {
          console.error('Error fetching author data', error);
        }
      );
  }

  getArticles(articlesId: string[]): void {
    this.articles = []; // Reset articles array
    articlesId.forEach(articleId => {
      this.http.get<any>(`http://localhost:3000/api/articles/${articleId}`)
        .subscribe(
          response => {
            this.articles.push(response.data.article)
            console.log(this.articles[this.articles.length - 1]);
          },
          error => console.error('Error fetching article data', error)
        );
    });
  }

  viewArticle(articleId: string): void {
    this.router.navigate(['/article', articleId]); // Adjust the route based on your routing setup
  }

  isItMe() {
    const authorSting = localStorage.getItem("author");
    if (authorSting) {
      const authorJson = JSON.parse(authorSting);
      return authorJson.id == this.authorId;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
