import { useState, useCallback, useRef } from "react";

const API_KEY = "b27ba79c";
const BASE_URL = "https://www.omdbapi.com/";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const prevQuery = useRef("");

  const fetchMovies = useCallback(async (query) => {
    if (query === prevQuery.current) return;
    setIsLoading(true);

    try {
      prevQuery.current = query;
      const response = await fetch(
        `${BASE_URL}?s=${query}&type=movie&apikey=${API_KEY}`
      );

      if (!response.ok)
        throw new Error("There was an error searching for the movies");

      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { movies, fetchMovies, isLoading };
}

export default useMovies;
