import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book as BookType } from '../book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-comments.html',
  styleUrl: './book-comments.css',
})
// GET Comments
export class BookComments {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  bookId = this.route.snapshot.params['id'];
  currentBook: BookType | null = null;
  comments: any[] = [];
  loading = true;

  constructor() {
    this.bookId = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.bookId).then((book) => {
      this.currentBook = book;
      this.comments = book?.comments ?? [];
      this.loading = false;
    });
  }
  // DETELE Comments
  deleteComment(commentId: string) {
    this.bookService.deleteComment(this.bookId, commentId)
      .then(() => {
        this.comments = this.comments.filter(c => c.commentId !== commentId);
      })
      .catch(err => console.error(err));
  }
}
