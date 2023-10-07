function MoviesForm({ query, onChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <h1>Movie search</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          id="query"
          type="text"
          placeholder="Avengers, X-Men, Barbie..."
          value={query}
          onChange={onChange}
        />
      </form>
    </header>
  );
}

export default MoviesForm;
