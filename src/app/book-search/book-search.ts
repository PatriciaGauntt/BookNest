import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book as BookType } from '../book';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';

export type SortableBookFields =
  'title' |
  'author_first_name' |
  'author_last_name' |
  'series_name';

@Component({
  selector: 'app-book-search',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {

  bookService: BookService = inject(BookService);

  fullResults: BookType[] = [];

  pagedResults: BookType[] = [];

  sortColumn: SortableBookFields | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  booksPerPage = 20;
  currentPage = 0;
  previousDisabled = true;
  nextDisabled = false;

  constructor() {
    this.loadAllBooks();
  }

  async loadAllBooks() {
    this.fullResults = await this.bookService.getBooks(0, 5000);
    this.applySorting();
    this.applyPaging();
  }

  async searchBooks(searchString: string) {
    this.fullResults = await this.bookService.searchBooks(searchString);
    this.currentPage = 0;
    this.applySorting();
    this.applyPaging();
  }

  sortBy(column: SortableBookFields) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.applySorting();
    this.applyPaging();
  }

  sortByDirection(column: SortableBookFields, direction: 'asc' | 'desc') {
  this.sortColumn = column;
  this.sortDirection = direction;
  this.applySorting();
  this.applyPaging();
}

  applySorting() {
    if (!this.sortColumn) return;

    const col = this.sortColumn;

    this.fullResults.sort((a, b) => {
      const valA = (a[col] || '').toString().toLowerCase();
      const valB = (b[col] || '').toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getSortIcon(column: SortableBookFields): string {
    if (this.sortColumn !== column) {
      return 'bi-arrow-down-up';
    }
    return this.sortDirection === 'asc'
      ? 'bi-caret-up-fill'
      : 'bi-caret-down-fill';
  }

  applyPaging() {
    const start = this.currentPage * this.booksPerPage;
    const end = start + this.booksPerPage;

    this.pagedResults = this.fullResults.slice(start, end);

    this.previousDisabled = this.currentPage === 0;
    this.nextDisabled = end >= this.fullResults.length;
  }

  nextPage() {
    if (this.nextDisabled) return;

    this.currentPage++;
    this.applyPaging();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  previousPage() {
    if (this.previousDisabled) return;

    this.currentPage--;
    this.applyPaging();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
