import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book as BookType } from '../book'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './book-create.html',
  styleUrls: ['./book-create.css'],
})

// POST book
export class BookCreate {
  router: Router = inject(Router);
  bookService: BookService = inject(BookService);
  showValidationModal = false;

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

  newBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author_first_name: new FormControl('', Validators.required),
    author_last_name: new FormControl('', Validators.required),
    publication_year: new FormControl(2011),
    series_name: new FormControl(''),
    location: new FormControl('', Validators.required),
    bookcase: new FormControl(0),
    bookshelf: new FormControl(0),
    imagePath: new FormControl(''),
  });

async createBook() {
  if (this.newBookForm.invalid) {
    this.showValidationModal = true;
    return;
  }

  const newBook: BookType = this.newBookForm.value as BookType;

  try {
    const result = await this.bookService.createBook(newBook);
    this.router.navigate([`/books/${result.id}`]);
  } catch (error) {
    console.error('Error creating book:', error);
  }
}

closeValidationModal() {
  this.showValidationModal = false;
}
}
