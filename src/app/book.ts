export interface Book {
  id : string;
  title : string;
  author_first_name : string;
  author_last_name : string;
  publication_year : number;
  series_name? : string;
  location : string;
  bookcase : number;
  imagePath? : string;
}
export interface CreateBook {
  title? : string | null;
  author_first_name? : string | null;
  author_last_name? : string | null;
  publication_year? : number | null;
  series_name? : string | null;
  location? : string | null;
  bookcase? : number | null;
  imagePath? : string | null;
}
