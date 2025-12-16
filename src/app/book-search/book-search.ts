import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book as BookType } from '../book';
import { RouterModule, Router } from '@angular/router';
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
  router: Router = inject(Router);
  bookService: BookService = inject(BookService);

  disableLocationFilter = false;
  disableSearchBox = false;

  masterBooks: BookType[] = [];
  fullResults: BookType[] = [];
  pagedResults: BookType[] = [];

  allLocations: string[] = [];
  selectedLocation: string = '';
  searchTerm: string = '';

  isSearching = false;

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
    this.applyFilters();
  }

  extractLocations() {
    this.allLocations = [...new Set(this.masterBooks.map(b => b.location))].sort();
  }

  //
  // SEARCH HANDLER
  //
  onSearchChange() {
    this.applyFilters();
  }

  //
  // LOCATION HANDLER
  //
  onLocationChange() {
    this.applyFilters();
  }

  //
  // CLEAN FILTER LOGIC
  //
  applyFilters() {
    let list = [...this.masterBooks];

    const hasSearch = this.searchTerm.trim() !== '';
    const hasLocation = this.selectedLocation !== '';

    // Search
    if (hasSearch) {
      const regex = new RegExp(this.searchTerm, 'i');
      list = list.filter(b =>
        regex.test(b.title || '') ||
        regex.test(b.author_last_name || '') ||
        regex.test(b.author_first_name || '') ||
        regex.test(b.series_name || '')
      );
    }

    // Location
    if (hasLocation) {
      list = list.filter(b => b.location === this.selectedLocation);
    }

    this.fullResults = list;
    this.currentPage = 0;
    this.isSearching = hasSearch || hasLocation;

    this.applySorting();
    this.applyPaging();
  }

  //
  // RESET BUTTON LOGIC
  //
  resetFilters() {
    this.searchTerm = '';
    this.selectedLocation = '';
    this.isSearching = false;
    this.applyFilters();
  }

  //
  // SORTING
  //
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
  //
  // PAGING
  //
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
  //
  // COUNTING
  //
  get resultsCounter(): string {
  if (this.fullResults.length === 0) {
    return '0 of 0';
  }

  const start = this.currentPage * this.booksPerPage + 1;
  const end = Math.min(
    start + this.pagedResults.length - 1,
    this.fullResults.length
  );

  return `${start}-${end} of ${this.fullResults.length}`;
}
}

