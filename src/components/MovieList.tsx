import type { Movie } from "../types/movies";
import MovieItem from "./MovieItem";

type MovieListProps = {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
};

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
