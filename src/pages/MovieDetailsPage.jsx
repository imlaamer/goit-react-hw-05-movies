import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import { STATUSES } from 'utils/constants';
import { getMovieById } from 'services/api';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setStatus(STATUSES.pending);
        const movie = await getMovieById(movieId);
        console.log(movie);

        setStatus(STATUSES.success);
        setMovie(movie);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error.message);
        console.log(error.message);
      }
      // finally()
    };
    fetchMovieById(movieId);
  }, [movieId]);
  return (
    <>
      {status === STATUSES.pending && <Loader className="loadingBox" />}
      {status === STATUSES.success && <MovieDescription movie={movie} />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
    </>
  );
}

export default MovieDetailsPage;
