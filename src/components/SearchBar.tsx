import { useEffect, useRef } from "react";

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(function (){
    inputEl.current?.focus();
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
