import type { WatchedMovieType } from "../types/movies";
import WatchedMovie from "./WatchedMovie";

type WatchedListProps = {
  watched: WatchedMovieType[];
  onDeleteWatched: (id: string) => void;
};

export default function WatchedList({ watched, onDeleteWatched }: WatchedListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
