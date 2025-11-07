import { Component, inject } from '@angular/core';
import { Book as BookType} from '../book'
import { Book } from '../book/book';
import { BookService } from '../book.service';
import { homelandBook, goodDogCarlBook, kingArthurBook } from '../book';

@Component({
  selector: 'app-book-search',
  imports: [Book],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
  bookService: BookService = inject(BookService);
  searchResults: BookType[] = [];
  constructor() {
    this.searchResults = this.bookService.getBooks();
  }
  currentBook: BookType = homelandBook;


}
