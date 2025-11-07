import { Component } from '@angular/core';
import { Book } from '../book/book';
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
