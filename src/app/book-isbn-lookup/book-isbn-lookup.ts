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
  private bookService = inject(BookService);
  private router = inject(Router);

  showValidationModal = false;
  lookupError = '';
  isLoading = false;

  locations = [
    "Master Bedroom",
    "Living Room",
    "Hallway Shelf of Shame",
    "Great Room",
    "School Room",
    "Loft",
    "Office",
    "Dining",
    "Bedroom 1",
    "Bedroom 2",
    "Bedroom 3"
  ];

  private BookService = inject(BookService);
  private Router = inject(Router);

  isbnForm = new FormGroup({
    isbn: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  bookForm = new FormGroup({
    isbn: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author_first_name: new FormControl(''),
    author_last_name: new FormControl('', Validators.required),
    edition_note: new FormControl(''),
    publication_year: new FormControl<number | null>(null),
    series_name: new FormControl(''),
    location: new FormControl('', Validators.required),
    bookcase: new FormControl(0),
    bookshelf: new FormControl(0),
    imagePath: new FormControl('')
  });

  async lookupISBN() {
    this.lookupError = '';
    this.isLoading = true;

    const isbn = this.isbnForm.value.isbn?.trim();
    if (!isbn) return;

    try {
      const result = await this.bookService.lookupBookByISBN(isbn);

      // Populate form with returned values
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

  async createBook() {
    if (this.bookForm.invalid) {
      this.showValidationModal = true;
      return;
    }

    const newBook: BookType = this.bookForm.value as BookType;

    try {
      const result = await this.bookService.createBook(newBook);
      this.router.navigate([`/books/${result.id}`]);
    } catch (error) {
      console.error('Error creating book from ISBN:', error);
    }
  }
    closeValidationModal() {
    this.showValidationModal = false;
  }
}
