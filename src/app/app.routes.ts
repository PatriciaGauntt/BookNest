import { Routes } from '@angular/router';
import { BookSearch } from './book-search/book-search';
import { BookDetails } from './book-details/book-details'
import { BookEdit } from './book-edit/book-edit'
import { BookCreate } from './book-create/book-create';
import { BookHome } from './book-home/book-home';
import { BookFeedback} from './book-feedback/book-feedback';
import { BookOverview } from './book-overview/book-overview';
import { BookResume } from './book-resume/book-resume';
import { BookStack } from './book-stack/book-stack';
import { BookComments } from './book-comments/book-comments';
import { BookIsbnLookup } from './book-isbn-lookup/book-isbn-lookup';

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
    path: 'books/stack',
    component: BookStack,
    title: 'Book Stack',
  },
  {
    path: 'books/resume',
    component: BookResume,
    title: 'Book Resume',
  },
  {
    path: 'books/feedback',
    component: BookFeedback,
    title: 'Book Feedback',
  },
  {
    path: 'books/new',
    component: BookCreate,
    title: 'Book Create',
  },
  {
    path: 'books/isbn',
    component: BookIsbnLookup,
    title: 'Book ISBN Lookup',
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
