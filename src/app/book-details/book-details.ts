import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book as BookType } from '../book'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {
  bookService: BookService = inject(BookService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId: string = '';
  currentBook!: BookType;

  commentForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book
    });
  }
  submitComment() {
    this.bookService.submitComment(this.commentForm.value.name ?? '', this.commentForm.value.comment ?? '');
  };
  deleteBook() {
    this.bookService.deleteBook(this.currentBook.id);
    this.router.navigate(['']);
  };
}


