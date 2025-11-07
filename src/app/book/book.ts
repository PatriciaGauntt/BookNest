import { Component, input } from '@angular/core';
import { Book as BookType } from '../book'

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  currentBook = input.required<BookType>();
}


