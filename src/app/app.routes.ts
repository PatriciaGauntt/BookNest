import { Routes } from '@angular/router';
import { BookSearch } from './book-search/book-search';
import { BookDetails } from './book-details/book-details'

export const routes: Routes = [
  {
    path: '',
    component: BookSearch,
    title: 'Book Search',
  },
  {
    path: 'books/:id',
    component: BookDetails,
    title: 'Book Details',
  }
];
