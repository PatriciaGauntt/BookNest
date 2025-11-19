import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book as BookType } from '../book';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';

// ---------------------------------------------
// Sortable field types
// ---------------------------------------------
export type SortableBookFields =
  'title' |
  'author_first_name' |
  'author_last_name' |
  'series_name';

// ---------------------------------------------
// Component
// ---------------------------------------------
@Component({
  selector: 'app-book-search',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {

  bookService: BookService = inject(BookService);
  searchResults: BookType[] = [];

  // Sorting
  sortColumn: SortableBookFields | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Pagination
  booksPerPage = 20;
  currentPage = 0;
  previousDisabled = true;
  nextDisabled = false;

  constructor() {
    this.bookService.getBooks(this.currentPage, this.booksPerPage)
      .then((books) => {
        this.searchResults = books;
      });
  }

  async searchBooks(searchString: string) {
    this.searchResults = await this.bookService.searchBooks(searchString);
  }

  async nextPage() {
    if (this.searchResults.length < this.booksPerPage) return;

    this.previousDisabled = false;
    this.currentPage++;

    const skip = this.currentPage * this.booksPerPage;
    this.searchResults = await this.bookService.getBooks(skip, this.booksPerPage);

    if (this.searchResults.length < this.booksPerPage) {
      this.nextDisabled = true;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async previousPage() {
    if (this.currentPage === 0) return;

    this.nextDisabled = false;
    this.currentPage = Math.max(0, this.currentPage - 1);

    const skip = this.currentPage * this.booksPerPage;
    this.searchResults = await this.bookService.getBooks(skip, this.booksPerPage);

    if (this.currentPage === 0) {
      this.previousDisabled = true;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---------------------------------------------
  // Sorting logic
  // ---------------------------------------------
  get sortedResults() {
    if (!this.sortColumn) return this.searchResults;

    const column = this.sortColumn as SortableBookFields;

    return [...this.searchResults].sort((a, b) => {
      const valA = (a[column] || '').toString().toLowerCase();
      const valB = (b[column] || '').toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  sortByDirection(column: SortableBookFields, direction: 'asc' | 'desc') {
    this.sortColumn = column;
    this.sortDirection = direction;
  }
  // The CORRECT sort method
  sortBy(column: SortableBookFields) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  // ---------------------------------------------
  // Icon selection for sorting arrows
  // ---------------------------------------------
  getSortIcon(column: SortableBookFields): string {
    if (this.sortColumn !== column) {
      return 'bi-arrow-down-up';  // neutral icon
    }
    return this.sortDirection === 'asc'
      ? 'bi-caret-up-fill'
      : 'bi-caret-down-fill';
  }
}
