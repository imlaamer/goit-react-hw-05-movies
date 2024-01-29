import css from './MoviesList.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { basePosterImgPath, defaultImg } from 'utils/constants';

function MoviesList({ movies, moviesListRef }) {
  const location = useLocation();

  return (
    <ul className={css.moviesList} ref={moviesListRef}>
      {movies.map(({ id, title, poster_path, name = 'movie' }) => {
        return (
          <li key={id} className={css.movieItem}>
            <NavLink
              state={{ from: location }}
              to={`/movies/${id}/`}
              className={css.movieLink}
            >
              <img
                src={
                  poster_path
                    ? basePosterImgPath + poster_path
                    : `${defaultImg}`
                }
                alt={title ?? name}
                width={200}
                className={css.movieListImg}
              />

              <p className={css.movieTitle}> {title ?? name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
