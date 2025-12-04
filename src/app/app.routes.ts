import { Routes } from '@angular/router';
import { BookSearch } from './book-search/book-search';
import { BookDetails } from './book-details/book-details'
import { BookEdit } from './book-edit/book-edit'
import { BookCreate } from './book-create/book-create';
import { BookHome } from './book-home/book-home';
import { BookOverview } from './book-overview/book-overview';
import { BookComments } from './book-comments/book-comments';

export const routes: Routes = [
  {
    path: '',
    component: BookHome,
    title: 'Book Home',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'books/search',
    component: BookSearch,
    title: 'Book Search',
    runGuardsAndResolvers: 'always',
  },
    {
    path: 'books/overview',
    component: BookOverview,
    title: 'Book Overview',
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
  {
    path: 'books/:id/comments',
    component: BookComments,
    title: 'Book Comments',
  },
  {
    path: '_temp',
    component: BookHome, 
  },
];
