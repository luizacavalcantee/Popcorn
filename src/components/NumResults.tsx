import type { Movie } from "../types/movies";

type NumResultsProps = {
  movies: Movie[];
};

export default function NumResults({ movies }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
