import { useState, useCallback, useEffect } from "react";
import MoviesForm from "./components/MoviesForm";
import MovieList from "./components/MovieList";
import useMovies from "./hooks/useMovies";
import debounce from "./utils/debounce";

function App() {
  const [query, setQuery] = useState("");
  const { movies, fetchMovies } = useMovies(query);

  const debouncedFetch = useCallback(
    debounce((query) => fetchMovies(query)),
    []
  );

  useEffect(() => {
    if (query === "") return;

    debouncedFetch(query);
  }, [query, debouncedFetch]);

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <main>
      <MoviesForm query={query} onChange={handleOnChange} />
      <MovieList movies={movies} />
    </main>
  );
}

export default App;
