import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book as BookType } from '../book';

@Component({
  selector: 'app-book-isbn-lookup',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-isbn-lookup.html',
  styleUrl: './book-isbn-lookup.css',
})
export class BookIsbnLookup {

  bookService = inject(BookService);
  router = inject(Router);

  showValidationModal = false;
  showIsbnFormatModal = false;

  lookupError = '';
  isLoading = false;

  locations = [
    'Master Bedroom',
    'Living Room',
    'Hallway Shelf of Shame',
    'Great Room',
    'School Room',
    'Loft',
    'Office',
    'Dining',
    'Bedroom 1',
    'Bedroom 2',
    'Bedroom 3'
  ];

  isbnForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  bookForm = new FormGroup({
    isbn: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author_first_name: new FormControl('', Validators.required),
    author_last_name: new FormControl('', Validators.required),
    edition_note: new FormControl(''),
    publication_year: new FormControl<number | null>(2011),
    series_name: new FormControl(''),
    location: new FormControl('', Validators.required),
    bookcase: new FormControl(0),
    bookshelf: new FormControl(0),
    imagePath: new FormControl('')
  });

  // -----------------------------------------
  // ISBN LOOKUP
  // -----------------------------------------
  async lookupISBN() {
    this.lookupError = '';
    this.isLoading = true;

    const rawIsbn = this.isbnForm.value.isbn?.trim();
    if (!rawIsbn) {
      this.isLoading = false;
      return;
    }

    // Normalize ISBN (remove spaces & hyphens)
    const normalizedIsbn = rawIsbn.replace(/[\s-]/g, '');

    // ❗ FORMAT VALIDATION (before API call)
    if (!this.isValidIsbnFormat(normalizedIsbn)) {
      this.showIsbnFormatModal = true;
      this.isLoading = false;
      return;
    }

    try {
      const result = await this.bookService.lookupBookByISBN(normalizedIsbn);

      this.bookForm.patchValue({
        isbn: result.isbn ?? '',
        title: result.title ?? '',
        author_first_name: result.author_first_name ?? '',
        author_last_name: result.author_last_name ?? '',
        edition_note: result.edition_note ?? '',
        publication_year: result.publication_year ?? null,
        series_name: result.series_name ?? '',
        imagePath: result.imagePath ?? ''
      });

    } catch (err: any) {
      this.lookupError = err.message || 'ISBN lookup failed';
    } finally {
      this.isLoading = false;
    }
  }

  // -----------------------------------------
  // ISBN FORMAT VALIDATION
  // -----------------------------------------
  isValidIsbnFormat(isbn: string): boolean {
    const isbn10 = /^[0-9]{9}[0-9X]$/i;
    const isbn13 = /^[0-9]{13}$/;
    return isbn10.test(isbn) || isbn13.test(isbn);
  }

  // -----------------------------------------
  // CREATE BOOK
  // -----------------------------------------
  async createBook() {
    if (this.bookForm.invalid) {
      this.showValidationModal = true;
      return;
    }

    const newBook: BookType = this.bookForm.value as BookType;

    try {
      const result = await this.bookService.createBook(newBook);
      this.router.navigate([`/books/${result.book.id}`]);
    } catch (error) {
      console.error('Error creating book from ISBN:', error);
    }
  }

  closeValidationModal() {
    this.showValidationModal = false;
  }

  closeIsbnFormatModal() {
    this.showIsbnFormatModal = false;
  }
}
