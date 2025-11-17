import { Routes } from '@angular/router';
import { BookSearch } from './book-search/book-search';
import { BookDetails } from './book-details/book-details'
import { BookEdit } from './book-edit/book-edit'
import { BookCreate } from './book-create/book-create';

export const routes: Routes = [
  {
    path: '',
    component: BookSearch,
    title: 'Book Search',
  },
  {
    path: 'books/new',
    component: BookCreate,
    title: 'Book Create',
  },
  {
    path: 'books/:id',
    component: BookDetails,
    title: 'Book Details',
  },
    {
    path: 'books/edit/:id',
    component: BookEdit,
    title: 'Book Edit',
  },

];
