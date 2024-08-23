import { Component } from '@angular/core';
import { IAuthor } from '../../models/iauthor';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors : IAuthor[] = [];

  constructor() {
    this.authors= [
      {
        id: 1,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        categories: ["Technology", "AI", "Programming"],
        followers: 1500,
      },
      {
        id: 2,
        name: "John Smith",
        email: "john.smith@example.com",
        categories: ["Lifestyle", "Minimalism", "Health"],
        followers: 2300,
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        categories: ["Finance", "Investing", "Cryptocurrency"],
        followers: 3200,
      },
      {
        id: 4,
        name: "David Lee",
        email: "david.lee@example.com",
        categories: ["Art", "Design", "Photography"],
        followers: 1800,
      },
      {
        id: 5,
        name: "Emily Clark",
        email: "emily.clark@example.com",
        categories: ["Education", "Teaching", "E-learning"],
        followers: 2100,
      }
    ];
    
  }
}
