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
  url = 'http://127.0.0.1:3000/api/v1/books'

  async getBooks(): Promise<Book[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? [];
  }

  getBookById(id: string): Book {
    return kingArthurBook;
  }
  submitComment(name: string, comment: string) {
    console.log(`Submitted comment from name ${name} with comment : ${comment}`);
  }
  async searchBooks(searchString: string) : Promise<Book[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? [];
  }
}
