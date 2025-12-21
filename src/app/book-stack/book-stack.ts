import { Component } from '@angular/core';

@Component({
  selector: 'app-book-stack',
  imports: [],
  templateUrl: './book-stack.html',
  styleUrl: './book-stack.css',
})
export class BookStack {
ngAfterViewInit() {
  const images = document.querySelectorAll('.float-img');

  images.forEach((img) => {
    setInterval(() => {
      const x = Math.random() * 80 - 40;
      const y = Math.random() * 80 - 40;

      (img as HTMLElement).style.transform =
        `translate(${x}vw, ${y}vh) rotate(${Math.random() * 360}deg)`;
    }, 12000 + Math.random() * 8000);
  });
}
}
