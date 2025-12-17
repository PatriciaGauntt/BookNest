import { Component, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-overview',
  imports: [RouterModule],
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.css',
})
export class BookOverview {
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
