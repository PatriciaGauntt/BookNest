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
/*export class BookDetails {
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
  async confirmDelete() {
  const ok = confirm(`Are you sure you want to delete "${this.currentBook.title}"?`);

  if (!ok) return;

  await this.bookService.deleteBook(this.bookId);
  this.router.navigate(['/books/search']);
  };
}*/
export class BookDetails {
  bookService: BookService = inject(BookService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId: string = '';
  currentBook!: BookType;

  // ⭐ NEW: Flag used to show/hide modal
  showDeleteModal = false;

  commentForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book;
    });
  }

  submitComment() {
    this.bookService.submitComment(
      this.commentForm.value.name ?? '',
      this.commentForm.value.comment ?? ''
    );
  }

  // ⭐ NEW: Open the modal instead of confirm()
  confirmDelete() {
    this.showDeleteModal = true;
  }

  // ⭐ NEW: Close modal without deleting
  closeModal() {
    this.showDeleteModal = false;
  }

  // ⭐ NEW: Called when user clicks "Yes, Delete"
  async deleteBook() {
    await this.bookService.deleteBook(this.bookId);
    this.showDeleteModal = false;
    this.router.navigate(['/books/search']);
  }
}


