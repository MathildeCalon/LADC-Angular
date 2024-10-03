import { Component, Input } from '@angular/core';
import { Article } from '../../utils/types';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input()
  article?: Article;

  addToCart(articleId){
    console.log('Add to cart');
  }
}
