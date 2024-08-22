import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../models/iarticle';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  faArrow = faArrowRight;
  faCheer = faHandshake;

  articles: IArticle[] = [];

  constructor() {
    this.articles = [
      {
        id: 1,
        title: "Exploring the Depths of AI",
        description: "An in-depth look at the current state of artificial intelligence and its future prospects.",
        author: "Jane Doe",
        comments: 12,
        likes: 125,
      },
      {
        id: 2,
        title: "The Art of Minimalist Living",
        description: "How to declutter your life and embrace a minimalist lifestyle for greater peace of mind.",
        author: "John Smith",
        comments: 8,
        likes: 98,
      },
      {
        id: 3,
        title: "Understanding Blockchain Technology",
        description: "A comprehensive guide to blockchain, its applications, and why it's the future of secure transactions.",
        author: "Alice Johnson",
        comments: 20,
        likes: 210,
      },
      {
        id: 4,
        title: "The Power of Habit Formation",
        description: "Learn how to build lasting habits that can transform your life, based on the latest psychological research.",
        author: "Emily Clark",
        comments: 14,
        likes: 150,
      },
      {
        id: 5,
        title: "A Beginner's Guide to Meditation",
        description: "Step-by-step instructions on how to start meditating, reduce stress, and improve your overall well-being.",
        author: "David Lee",
        comments: 10,
        likes: 85,
      }
    ];
  }

  ngOnInit(): void {
    
  }
}
