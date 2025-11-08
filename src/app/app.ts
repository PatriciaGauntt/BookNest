import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
