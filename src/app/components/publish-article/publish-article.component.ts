import { Component } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-publish-article',
  templateUrl: './publish-article.component.html',
  styleUrls: ['./publish-article.component.css']
})
export class PublishArticleComponent {
  // Variables for form fields
  categories: string[] = [];
  articleContent: string = '';

  init: EditorComponent['init'] = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min',        // Suffix to use when loading 
    plugins: 'lists link image table code help wordcount'
  };
  
  // Method to add a category
  addCategory(event: KeyboardEvent | any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (event.key === 'Enter' && value && !this.categories.includes(value)) {
      this.categories.push(value);
      input.value = '';
      event.preventDefault(); // Prevent form submission on Enter
    }
  }

  // Method to remove a category
  removeCategory(category: string): void {
    this.categories = this.categories.filter(c => c !== category);
  }

  // Method to publish the article
  publishArticle(): void {
    console.log(this.articleContent);
    const articleData = {
      // You can add other fields here like title, description, visibility, etc.
      categories: this.categories,
      content: this.articleContent,
    };

    // TODO: Implement the API call or service to save the article
    console.log('Article published:', articleData);
  }
}
