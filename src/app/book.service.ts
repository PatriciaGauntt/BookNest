import { Injectable } from '@angular/core';
import { Book, CreateBook } from './book'
import { BookOverview } from './book-overview/book-overview';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = '/api/v1/booklists';

  async getBooks(): Promise<Book[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? [];
  }

  async getBookById(id: string): Promise<Book> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitComment(name: string, comment: string) {
    console.error(`Submitted comment from name ${name} with comment : ${comment}`);
  }

  async searchBooks(searchString: string): Promise<Book[]> {
    console.error(`---> ${searchString}`);
    const data = await fetch(`${this.url}?search=${searchString}`);
    return (await data.json()) ?? [];
  }
  async deleteBook(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {method: 'DELETE'});
  }
  async updateBook(id: string, bookData: Book) {
    await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookData),
    });
  }
  async createBook(book: CreateBook) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    return (await response.json()) ?? {};
  }
}
