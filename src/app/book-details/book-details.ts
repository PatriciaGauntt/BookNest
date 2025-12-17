import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  showDeleteModal = false;
  commentPosted = false;
  showDeleteSuccess = false;

  // Validation modal for comments
  showCommentValidationModal = false;

  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });

  constructor() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book;
    });
  }

  async submitComment() {

    //Stop if invalid
    if (this.commentForm.invalid) {
      this.showCommentValidationModal = true;
      return;
    }

    await this.bookService.submitComment(
      this.bookId,
      this.commentForm.value.name ?? '',
      this.commentForm.value.comment ?? ''
    );

    // Reload updated book
    this.currentBook = await this.bookService.getBookById(this.bookId);

    // Clear form
    this.commentForm.reset();

    // Show success message
    this.commentPosted = true;

    // Auto-hide after 3 seconds
    setTimeout(() => {
      this.commentPosted = false;
    }, 3000);
  }

  closeCommentValidationModal() {
    this.showCommentValidationModal = false;
  }

  confirmDelete() {
    this.showDeleteModal = true;
  }
  closeModal() {
    this.showDeleteModal = false;
  }
  async deleteBook() {
    await this.bookService.deleteBook(this.bookId);
    this.showDeleteModal = false;
    this.showDeleteSuccess = true;

    setTimeout(() => {
      this.showDeleteSuccess = false;
      this.router.navigate(['/books/search']);
    }, 3000);
  }

  closeSuccessModal() {
    this.showDeleteSuccess = false;
    this.router.navigate(['/books/search']);
  }
}

