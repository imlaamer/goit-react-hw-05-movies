import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesByQuery } from 'services/api';
import { STATUSES } from 'utils/constants';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

function MoviesPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [status, setStatus] = useState(STATUSES.idle);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchMoviesByQuery = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results: movies } = await getMoviesByQuery(query);
        setStatus(STATUSES.success);
        setMovies(movies);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error);
        console.log('Oops');
      }
    };
    fetchMoviesByQuery();
  }, []);

  const handleValueChange = event => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const handleSearchMoviesOnSubmit = event => {
    event.preventDefault();
    if (query === searchParams.get('query')) {
      return alert('Wa have already found movies for you');
    }

    if (query.trim() === '') {
      setQuery('');
      alert('Please enter a movie tittle ');
      return;
    }
    const fetchMoviesByQuery = async queryParam => {
      setSearchParams({ query: queryParam });
      try {
        setStatus(STATUSES.pending);
        const { results: movies } = await getMoviesByQuery(query);
        setStatus(STATUSES.success);
        setMovies(movies);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error);
        console.log('Oops');
      }
    };
    fetchMoviesByQuery(query);
  };

  return (
    <>
      <MoviesSearchForm
        onSubmit={handleSearchMoviesOnSubmit}
        onChange={handleValueChange}
        query={query}
      />

      {status === STATUSES.success && movies.length === 0 && (
        <p style={{ marginTop: 40, textAlign: 'center' }}>
          No results found for your search. <br /> Search again
        </p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
      {status === STATUSES.pending && <Loader className="loadingBox" />}
    </>
  );
}

export default MoviesPage;
