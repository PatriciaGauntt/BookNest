import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book as BookType } from '../book'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.html',
  styleUrl: './book-create.css',
})
export class BookCreate {
  router: Router = inject(Router);
  bookService: BookService = inject(BookService);
  newBookForm = new FormGroup({
      title: new FormControl(''),
      author_first_name: new FormControl(''),
      author_last_name: new FormControl(''),
      publication_year: new FormControl(0),
      series_name: new FormControl(''),
      location: new FormControl(''),
      bookcase: new FormControl(0),
      imagePath: new FormControl(''),
    });

  async createBook() {
    const result = await this.bookService.createBook(this.newBookForm.value);
    this.router.navigate([`books/${result.id}`]);
  }
}
