export interface Book {
  id : string;
  title : string;
  author_first_name : string;
  author_last_name : string;
  publication_date : number;
  series_name? : string;
  location: string;
  bookshelf: number;
}

export const homelandBook: Book = {
  id : "abc133",
  title : "Homeland ",
  author_first_name : "R.A.",
  author_last_name : "Salvatore",
  publication_date : 1990,
  series_name : "The Dark Elf Trilogy",
  location : "Living Room",
  bookshelf : 2,
}
export const goodDogCarlBook: Book = {
  id : "abc130",
  title : "Good Dog Carl",
  author_first_name : "Alexandra ",
  author_last_name : "Day",
  publication_date : 1985,
  series_name : "Good Dog Carl Series",
  location : "Office",
  bookshelf : 2
}
export const kingArthurBook: Book = {
  id : "abc138",
  title : "Tales from King Arthur",
  author_first_name : "Andrew ",
  author_last_name : "Lang",
  publication_date : 1993,
  location : "School Room",
  bookshelf : 2
}
