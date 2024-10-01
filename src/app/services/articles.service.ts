import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../utils/types';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url: string = 'articles.json';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
}
