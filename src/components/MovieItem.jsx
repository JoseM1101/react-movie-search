function MovieItem({ movie }) {
  const { Title: title, Year: year, Poster: poster } = movie;

  return (
    <div className="movie-item" data-testid="movie-item">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <h5>{year}</h5>
    </div>
  );
}

export default MovieItem;
