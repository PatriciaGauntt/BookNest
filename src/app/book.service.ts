import { Injectable } from '@angular/core';
import { Book } from './book'
import { homelandBook, goodDogCarlBook, kingArthurBook } from './book';
import { BookOverview } from './book-overview/book-overview';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://127.0.0.1:3000/api/v1/booklists';

  async getBooks(): Promise<Book[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? [];
  }

  getBookById(id: string): Book {
    return homelandBook;
  }
/*
  async getBookById(id: string): Promise<Book> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  */

  submitComment(name: string, comment: string) {
    console.log(`Submitted comment from name ${name} with comment : ${comment}`);
  }

  async searchBooks(searchString: string): Promise<Book[]> {
    const data = await fetch(`${this.url}?search=${searchString}`);
    return (await data.json()) ?? [];
  }
}
