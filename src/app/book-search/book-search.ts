import { Component, inject } from '@angular/core';
import { Book as BookType} from '../book'
import { BookDetails } from '../book-details/book-details';
import { BookService } from '../book.service';
import { homelandBook, goodDogCarlBook, kingArthurBook } from '../book';
import { BookOverview } from "../book-overview/book-overview";

@Component({
  selector: 'app-book-search',
  imports: [BookOverview, BookOverview],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
  bookService: BookService = inject(BookService);
  searchResults: BookType[] = [];
  constructor() {
    //this.searchResults = this.bookService.getBooks();
  }
  searchBooks(searchString: string) {
    this.searchResults = this.bookService.searchBooks(searchString);
  }

  currentBook: BookType = homelandBook;
}
