import css from './MovieDescription.module.css';
import React, { useRef } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { defaultImg } from 'utils/constants';
import { basePosterImgPath } from 'utils/constants';

function MovieDescription({ movie }) {
  const movieRef = useRef(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { title, release_date, vote_average, poster_path, overview, genres } =
    movie;

  const handleScrollDownOnClick = () => {
    setTimeout(() => {
      if (movieRef.current) {
        function scrollDownOnClick() {
          const movieBoxHeight =
            movieRef.current.getBoundingClientRect().height;
          window.scrollTo({
            top: movieBoxHeight + 90, //
            behavior: 'smooth',
          });
        }
        scrollDownOnClick();
      }
    }, 500);
  };

  return (
    <>
      <Link to={backLinkRef.current}>
        <button className={css.goBackBtn}>Go Back</button>
      </Link>

      <div className={css.movieDescriptionContainer} ref={movieRef}>
        <div className={css.descriptionImgBox}>
          <img
            src={poster_path ? basePosterImgPath + poster_path : defaultImg}
            alt={title ? title : 'poster'}
          />
        </div>
        <div className={css.descriptionBox}>
          <h2>{`${title}(${release_date?.slice(0, 4)})`}</h2>
          <p className={css.descriptionText}>
            User Score: {`${vote_average?.toFixed(1) * 10}`}%
          </p>
          <h3>Overview</h3>
          <p className={css.descriptionText}>{overview}</p>
          <h4>Genres</h4>
          <ul className={css.descriptionGenresList}>
            {genres?.map(({ id, name: genreName }) => (
              <li key={id} className={css.descriptionGenreItem}>
                <p>{genreName}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul className={css.additionalList}>
          <li>
            <NavLink
              onClick={handleScrollDownOnClick}
              to="credits"
              className={({ isActive }) =>
                `${css.additionalLink} ${isActive ? css.active : ''}`
              }
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleScrollDownOnClick}
              to="reviews"
              className={({ isActive }) =>
                `${css.additionalLink} ${isActive ? css.active : ''}`
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        {/* тут suspense чомусь не працює */}
        <Outlet />
      </div>
    </>
  );
}

export default MovieDescription;
