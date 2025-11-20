export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedMovieType extends Movie {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
