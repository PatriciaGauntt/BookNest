import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  bookEditForm!: FormGroup;
// Populate book for edit
  constructor() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book;
      this.bookEditForm = new FormGroup({
      title: new FormControl(this.currentBook.title),
      author_first_name: new FormControl(this.currentBook.author_first_name),
      author_last_name: new FormControl(this.currentBook.author_last_name),
      publication_year: new FormControl(this.currentBook.publication_year),
      series_name: new FormControl(this.currentBook.series_name ?? ''),
      location: new FormControl(this.currentBook.location),
      bookcase: new FormControl(this.currentBook.bookcase),
      bookshelf: new FormControl(this.currentBook.bookshelf),
      imagePath: new FormControl(this.currentBook.imagePath ?? ''),
    });
    });
  }
// Update book
  async saveBook() {
    const updateBook: Book = this.bookEditForm.value;
    await this.bookService.updateBook(this.bookId, updateBook);
    this.router.navigate([`/books/${this.bookId}`]);
  }
}
