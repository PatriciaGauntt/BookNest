import { Component, inject } from '@angular/core';
import { Book as BookType} from '../book';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { BookOverview } from "../book-overview/book-overview";

@Component({
  selector: 'app-book-search',
  imports: [BookOverview, BookOverview, RouterModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
  bookService: BookService = inject(BookService);
  searchResults: BookType[] = [];

  //Properties for controlling pagination
  booksPerPage = 20;
  currentPage = 0;
  previousDisabled = true;
  nextDisabled = false;

  constructor() {
    this.bookService.getBooks(this.currentPage, this.booksPerPage).then((books) => {
      this.searchResults = books;
    });
  }
  async searchBooks(searchString: string) {
    this.searchResults = await this.bookService.searchBooks(searchString);
  }
 async nextPage() {
    if (this.searchResults.length < this.booksPerPage) {
      return;
    }

    this.previousDisabled = false;

    this.currentPage += 1;
    const skip = this.currentPage * this.booksPerPage;
    this.searchResults = await this.bookService.getBooks(skip, this.booksPerPage);

    if (this.searchResults.length < this.booksPerPage) {
      this.nextDisabled = true;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async previousPage() {
    if (this.currentPage === 0) {
      return;
    }

    this.nextDisabled = false;

    this.currentPage = this.currentPage <= 0 ? 0 : this.currentPage - 1;
    const skip = this.currentPage * this.booksPerPage;
    this.searchResults = await this.bookService.getBooks(skip, this.booksPerPage);

    if (this.currentPage === 0) {
      this.previousDisabled = true;
    }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
