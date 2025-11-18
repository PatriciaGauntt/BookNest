import { Routes } from '@angular/router';
import { BookSearch } from './book-search/book-search';
import { BookDetails } from './book-details/book-details'
import { BookEdit } from './book-edit/book-edit'
import { BookCreate } from './book-create/book-create';
import { BookHome } from './book-home/book-home';

export const routes: Routes = [
  {
    path: '',
    component: BookHome,
    title: 'Book Home',
  },
  {
    path: 'books/search',
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
