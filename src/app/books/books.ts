import { Component } from '@angular/core';
import { BookDetails } from '../book-details/book-details';
import { homelandBook } from '../book';


@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  protected readonly currentDate = new Date().toISOString();
  protected readonly book = homelandBook
/*
  protected readonly books = [
    new Book(),
    new Book()
  ]
    */
}
