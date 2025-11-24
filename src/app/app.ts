import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    constructor(private router: Router) {}
  reloadSearch() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/books/search']);
    });
  }
reloadHome() {
  this.router.navigateByUrl('/_temp', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/']);
  });
}
}
