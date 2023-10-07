import { memo, useRef, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  const hasMovies = movies?.length > 0;
  const isFirstRender = useRef(true);

  const renderedMovies = movies?.map((movie) => {
    return <MovieItem key={movie.imdbID} movie={movie} />;
  });

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <>
      <article className="movie-list">
        {hasMovies ? (
          renderedMovies
        ) : (
          <h3 className="no-movies-text">
            {!hasMovies && isFirstRender.current
              ? "Search movies by title"
              : "No results found for this title"}
          </h3>
        )}
      </article>
    </>
  );
}

export default memo(MovieList);
