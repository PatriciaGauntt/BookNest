export interface Feedback {
  id: string;
  uuid: string;
  type: string;
  message: string;
  createdDate: string;
}

export interface CreateFeedback {
  type: string;
  message: string;
}
