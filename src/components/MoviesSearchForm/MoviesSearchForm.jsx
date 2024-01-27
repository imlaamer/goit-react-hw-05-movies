import css from './MoviesSearchForm.module.css';

function MoviesSearchForm({ onSubmit, onChange, query }) {
  return (
    <form onSubmit={onSubmit} className={css.moviesSearchForm}>
      <input
        type="text"
        placeholder="Search movie..."
        name="name"
        onChange={onChange}
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
