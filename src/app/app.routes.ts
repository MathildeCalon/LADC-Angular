import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CommentsBookComponent } from './pages/comments-book/comments-book.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: NotFound404Component},
    {path: 'gallery', component: GalleryComponent},
    {path: 'commentsBook', component: CommentsBookComponent},
    {path: 'newsletter', component: NewsletterComponent}
];
