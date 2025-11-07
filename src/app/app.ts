import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BookSearch } from './book-search/book-search'
import { Books } from './books/books'
import { Book } from "./book/book";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Books, BookSearch, Book],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BookNest');
}
