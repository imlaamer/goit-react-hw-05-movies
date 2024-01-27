import React, { useEffect, useRef, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { STATUSES } from 'utils/constants';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from 'components/LoadMoreBtn.jsx/LoadMoreBtn';

function HomePage() {
  const [status, setStatus] = useState(STATUSES.idle);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); //..
  const moviesListRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results: moviesData, total_results } = await getTrendingMovies(
          page
        );
        if (moviesData.length === 0) {
          setIsEmpty(true);
          setStatus(STATUSES.idle);
          return;
        }
        setMovies(prevMovies => [...prevMovies, ...moviesData]);
        setIsLoadMore(page < Math.ceil(total_results / 12));
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error);
        console.log('Oops');
      }
    };
    fetchMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setTimeout(() => {
      if (moviesListRef.current) {
        function scrollDownOnLoadMore() {
          const itemHeight =
            moviesListRef.current.firstElementChild.getBoundingClientRect()
              .height;
          const topHeight =
            moviesListRef.current.firstElementChild.getBoundingClientRect().top;
          const itemsPerCollumn = window.innerHeight / itemHeight;
          window.scrollTo({
            top: itemHeight * itemsPerCollumn - 80 - topHeight,
            behavior: 'smooth',
          });
        }
        scrollDownOnLoadMore();
      }
    }, 500);
  };

  return (
    <>
      {movies.length > 0 && (
        <MoviesList movies={movies} moviesListRef={moviesListRef} />
      )}
      {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
      {status === STATUSES.pending && <Loader className="loadingBox" />}
    </>
  );
}

export default HomePage;
