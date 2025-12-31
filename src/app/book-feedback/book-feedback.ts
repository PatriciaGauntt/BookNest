import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-book-feedback',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-feedback.html',
  styleUrl: './book-feedback.css',
})
export class BookFeedback {
  private feedbackService = inject(FeedbackService);

  feedback: Feedback[] = [];
  loading = true;

  constructor() {
    this.feedbackService.getFeedback()
      .then((result) => {
        this.feedback = result;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  deleteFeedback(id: string) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this feedback message?'
    );

    if (!confirmed) return;

    this.feedbackService.deleteFeedback(id)
      .then(() => {
        this.feedback = this.feedback.filter(f => f.id !== id);
      })
      .catch(err => {
        console.error(err);
        alert('Failed to delete feedback.');
      });
  }
}
