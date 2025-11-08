import { Component, inject, input } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Book as BookType, homelandBook } from '../book'
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  imports: [ReactiveFormsModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {
  bookService: BookService = inject(BookService);
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId: string = '';
  currentBook: BookType;

  commentForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor() {
    this.bookId = this.route.snapshot.params['id'];
    this.currentBook = this.bookService.getBookById(this.bookId);
  }
  submitComment() {
    this.bookService.submitComment(this.commentForm.value.name ?? '', this.commentForm.value.comment ?? '');
  };
}


