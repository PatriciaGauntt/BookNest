import { Injectable } from '@angular/core';
import { Book, CreateBook } from './book'
import { BookOverview } from './book-overview/book-overview';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = '/api/v1/booklists';
// GET books
  async getBooks(skip: number, limit: number): Promise<Book[]> {
    const data = await fetch(`${this.url}?skip=${skip}&limit=${limit}`);
    return (await data.json()) ?? [];
  }
// GET book by ID
  async getBookById(id: string): Promise<Book> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  // Search book
  async searchBooks(searchString: string): Promise<Book[]> {
    console.error(`---> ${searchString}`);
    const data = await fetch(`${this.url}?search=${searchString}`);
    return (await data.json()) ?? [];
  }
  // DELETE book
  async deleteBook(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {method: 'DELETE'});
  }
  // PATCH book
  async updateBook(id: string, bookData: Book) {
    await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(bookData),
      });
    }
  // POST book
  async createBook(book: CreateBook) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    return (await response.json()) ?? {};
  }
  // POST comment
  async submitComment(bookId: string, name: string, comment: string) {
    const commentPayload = {
      name,
      comment
    };

    const response = await fetch(`${this.url}/${bookId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentPayload),
    });

    if (response.ok) return true;
      throw new Error('Failed to save comment');
  }
  // DELETE comment
  async deleteComment(bookId: string, commentId: string): Promise<any> {
    const response = await fetch(`${this.url}/${bookId}/comments/${commentId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete comment');
    }

    return response.json();
  }
}
