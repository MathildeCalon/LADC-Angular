import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ArticleComponent } from '../../components/article/article.component';
import { Article } from '../../utils/types';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService
      .getArticles().subscribe(
        (data) => {
        this.articles = data;
        console.log(this.articles);
      },
      (error) => console.error(error));
  }
}
