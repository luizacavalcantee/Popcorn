type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
