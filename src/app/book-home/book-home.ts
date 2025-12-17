import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-home',
  imports: [RouterModule],
  templateUrl: './book-home.html',
  styleUrl: './book-home.css',
})
// randomize home picture
export class BookHome implements OnInit {

  images = [
    '/images/house-made-books.jpg',
    '/images/house-made-books2.jpg',
    '/images/house-made-books3.jpg',
  ];

  randomHomeImage = '';

  ngOnInit() {
    const index = Math.floor(Math.random() * this.images.length);
    this.randomHomeImage = this.images[index];
  }
    showAddBookModal = false;

    constructor(private router: Router) {}

    openAddBookModal() {
      this.showAddBookModal = true;
    }

    closeAddBookModal() {
      this.showAddBookModal = false;
    }

    goToManualAdd() {
      this.showAddBookModal = false;
      this.router.navigate(['/books/new']);
    }

    goToIsbnAdd() {
      this.showAddBookModal = false;
      this.router.navigate(['/books/isbn']);
    }
}
