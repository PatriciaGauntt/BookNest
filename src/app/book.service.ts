import { Injectable } from '@angular/core';
import { Book } from './book'
import { homelandBook, goodDogCarlBook, kingArthurBook } from './book';
import { BookOverview } from './book-overview/book-overview';

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
  submitComment(name: string, comment: string) {
    console.log(`Submitted comment from name ${name} with comment : ${comment}`);
  }
  searchBooks(searchString: string) : Book[] {
    return [
      homelandBook,
      goodDogCarlBook,
      kingArthurBook,
    ]
  }
}
