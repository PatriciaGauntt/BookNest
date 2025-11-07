import { Injectable } from '@angular/core';
import { Book } from './book'
import { homelandBook, goodDogCarlBook, kingArthurBook } from './book';

const BOOK_ARRAY = [
  homelandBook,
  goodDogCarlBook,
  kingArthurBook,
  homelandBook,
  goodDogCarlBook,
  kingArthurBook,
  homelandBook,
  goodDogCarlBook,
  kingArthurBook,
];

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBooks(): Book[] {
    return BOOK_ARRAY;
  }

  getBookById(id: string): Book {
    return kingArthurBook;
  }
}
