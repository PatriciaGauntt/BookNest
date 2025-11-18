import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-home',
  imports: [RouterModule],
  templateUrl: './book-home.html',
  styleUrl: './book-home.css',
})
export class BookHome implements OnInit {

  images = [
    '/images/house-made-books.jpg',
    '/images/house-made-books2.jpg'
  ];

  randomHomeImage = '';

  ngOnInit() {
    const index = Math.floor(Math.random() * this.images.length);
    this.randomHomeImage = this.images[index];
  }
}
