import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-book-feedback',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-feedback.html',
  styleUrl: './book-feedback.css',
})
export class BookFeedback {
  private feedbackService = inject(FeedbackService);

  feedback: Feedback[] = [];
  loading = true;

  showModal = false;
  newType = '';
  newMessage = '';
  constructor() {
    this.feedbackService.getFeedback()
      .then((result) => {
        this.feedback = result;
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
      });
  }

  deleteFeedback(id: string) {
    this.feedbackService.deleteFeedback(id)
      .then(() => {
        this.feedback = this.feedback.filter(f => f.id !== id);
      })
      .catch(err => {
        console.error(err);
        alert('Failed to delete feedback.');
      });
  }
    openModal() {
    this.newType = '';
    this.newMessage = '';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
    saveFeedback() {
    if (!this.newType || !this.newMessage) {
      alert('Both type and message are required.');
      return;
    }

    this.feedbackService.createFeedback({
      type: this.newType,
      message: this.newMessage
    })
    .then((created) => {
      // add to top of list (matches sort order)
      this.feedback.unshift(created);
      this.closeModal();
    })
    .catch(err => {
      console.error(err);
      alert('Failed to save feedback.');
    });
  }
}

