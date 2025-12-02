import { Component, inject, OnInit } from '@angular/core';
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

  masterBooks: BookType[] = [];
  fullResults: BookType[] = [];
  pagedResults: BookType[] = [];

  allLocations: string[] = [];
  selectedLocation: string = '';
  searchTerm: string = '';   // ⭐ added so we can track search input

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

  // ⭐ NEW SEARCH HANDLER
  onSearchChange() {
    if (this.searchTerm.trim() !== '') {
      // When typing → disable location filter
      this.selectedLocation = '';
    }
    this.applyFilters();
  }

  // ⭐ NEW LOCATION HANDLER
  onLocationChange() {
    if (this.selectedLocation !== '') {
      // When selecting location → disable search filter
      this.searchTerm = '';
    }
    this.applyFilters();
  }

  // ⭐ REPLACED applyFilters WITH LOGIC YOU REQUESTED
  applyFilters() {
    let list = [...this.masterBooks];

    const hasSearch = this.searchTerm.trim() !== '';
    const hasLocation = this.selectedLocation !== '';

    // 1. Search only
    if (hasSearch && !hasLocation) {
      const regex = new RegExp(this.searchTerm, 'i');
      list = list.filter(b =>
        regex.test(b.title || '') ||
        regex.test(b.author_last_name || '') ||
        regex.test(b.author_first_name || '') ||
        regex.test(b.series_name || '')
      );
    }

    // 2. Location only
    else if (!hasSearch && hasLocation) {
      list = list.filter(b => b.location === this.selectedLocation);
    }

    // 3. Both empty → all books (list already = masterBooks)

    this.fullResults = list;
    this.currentPage = 0;

    this.applySorting();
    this.applyPaging();
  }

  // ⭐ Remove old searchBooks (not used)
  async searchBooks(searchString: string) {
    this.searchTerm = searchString;
    this.onSearchChange();
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

