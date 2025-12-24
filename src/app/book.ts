export interface Book {
  id: string;
  title: string;
  author_first_name: string;
  author_last_name: string;
  publication_year: number;
  edition_note: string;
  series_name: string;
  location: string;
  bookcase: number;
  bookshelf: number;
  isbn: string;
  imagePath: string;
  isPotentialDuplicate?: boolean;

  comments?: {
    name: string;
    comment: string;
    commentDate: string;
    commentId: string;
  }[];
}
export interface CreateBook {
  title? : string | null;
  author_first_name? : string | null;
  author_last_name? : string | null;
  publication_year? : number | null;
  edition_note?: string;
  series_name? : string | null;
  location? : string | null;
  bookcase? : number | null;
  bookshelf? : number | null;
  isbn? : string | null;
  imagePath? : string | null;
  isPotentialDuplicate?: boolean;
}
