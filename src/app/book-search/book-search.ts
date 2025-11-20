import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book as BookType } from '../book';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';

export type SortableBookFields =
  'title' |
  'author_first_name' |
  'author_last_name' |
  'series_name';

@Component({
  selector: 'app-book-search',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {

  bookService: BookService = inject(BookService);

  masterBooks: BookType[] = [];

  fullResults: BookType[] = [];

  pagedResults: BookType[] = [];

  allLocations: string[] = [];
  selectedLocation: string = '';

  sortColumn: SortableBookFields | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  booksPerPage = 10;
  currentPage = 0;
  previousDisabled = true;
  nextDisabled = false;

  constructor() {
    this.loadAllBooks();
  }

  async loadAllBooks() {
    this.masterBooks = await this.bookService.getBooks(0, 5000);
    this.extractLocations();
    this.applyFilters();   // applies sort + paging too
  }

  extractLocations() {
    this.allLocations = [...new Set(this.masterBooks.map(b => b.location))].sort();
  }

  async searchBooks(searchString: string) {
    // Search always starts from the FULL set
    const filtered = this.masterBooks.filter(b =>
      b.title.toLowerCase().includes(searchString.toLowerCase())
    );

    this.fullResults = filtered;
    this.currentPage = 0;

    this.applySorting();
    this.applyPaging();
  }

  applyFilters() {
    // 1️⃣ Always start from masterBooks
    let list = [...this.masterBooks];

    // 2️⃣ Apply location filter
    if (this.selectedLocation) {
      list = list.filter(b => b.location === this.selectedLocation);
    }

    this.fullResults = list;

    // 3️⃣ Reset paging on filter
    this.currentPage = 0;

    // 4️⃣ Re-sort and re-page
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
