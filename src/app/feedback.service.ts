import { Injectable } from '@angular/core';
import { Feedback, CreateFeedback } from './feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private url = '/api/v1/feedback';

  async getFeedback(): Promise<Feedback[]> {
    const res = await fetch(this.url);
    return (await res.json()) ?? [];
  }

  async getFeedbackById(id: string): Promise<Feedback> {
    const res = await fetch(`${this.url}/${id}`);
    return (await res.json()) ?? {};
  }

  async createFeedback(feedback: CreateFeedback): Promise<Feedback> {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });

    return (await res.json()) ?? {};
  }

  async deleteFeedback(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
  }
}
