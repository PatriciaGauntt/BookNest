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
