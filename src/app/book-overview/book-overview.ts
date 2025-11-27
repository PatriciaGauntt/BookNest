import { Component, input } from '@angular/core';
import { Book as BookType } from '../book';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-overview',
  imports: [RouterModule],
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.css',
})
export class BookOverview {
  currentBook = input.required<BookType>();
}
