import css from './MoviesSearchForm.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function MoviesSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const [query, setQuery] = useState(() => queryParam ?? '');

  const handleValueChange = event => {
    setQuery(event.target.value);
  };

  const handleSearchMoviesOnSubmit = event => {
    event.preventDefault();
    if (query === queryParam) {
      return alert('We have already found movies for you');
    }
    setSearchParams({ query: query });
  };

  return (
    <form
      onSubmit={handleSearchMoviesOnSubmit}
      className={css.moviesSearchForm}
    >
      <input
        type="text"
        placeholder="Search movie..."
        name="name"
        onChange={handleValueChange}
        value={query}
        autoFocus
        required
        aria-label="Movie title"
        className={css.moviesSearchInput}
      />
      <button className={css.moviesSearchBtn}>Search</button>
    </form>
  );
}

export default MoviesSearchForm;
