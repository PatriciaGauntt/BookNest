import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book, Book as BookType } from '../book'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './book-edit.html',
  styleUrl: './book-edit.css',
})
export class BookEdit {
  bookService: BookService = inject(BookService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId: string = '';
  currentBook!: BookType;

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
    'Bedroom 3',
  ];

  // Popup modal
  showEditValidationModal = false;

  bookEditForm!: FormGroup;

  constructor() {
    this.bookId = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book;

      this.bookEditForm = new FormGroup({
        title: new FormControl(this.currentBook.title, Validators.required),
        author_first_name: new FormControl(this.currentBook.author_first_name, Validators.required),
        author_last_name: new FormControl(this.currentBook.author_last_name, Validators.required),
        publication_year: new FormControl(this.currentBook.publication_year),
        series_name: new FormControl(this.currentBook.series_name ?? ''),
        location: new FormControl(this.currentBook.location, Validators.required),
        bookcase: new FormControl(this.currentBook.bookcase),
        bookshelf: new FormControl(this.currentBook.bookshelf),
        imagePath: new FormControl(this.currentBook.imagePath ?? ''),
      });
    });
  }

  async saveBook() {

    //stop if invalid — show popup
    if (this.bookEditForm.invalid) {
      this.showEditValidationModal = true;
      return;
    }

    const updateBook: Book = this.bookEditForm.value;
    await this.bookService.updateBook(this.bookId, updateBook);
    this.router.navigate([`/books/${this.bookId}`]);
  }

  closeEditValidationModal() {
    this.showEditValidationModal = false;
  }
}

