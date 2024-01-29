import css from './Cast.module.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { STATUSES, basePosterImgPath, defaultImg } from 'utils/constants';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

function Cast() {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        setStatus(STATUSES.pending);
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error);
        console.log('Oops');
      }
    };
    fetchCastById(movieId);
  }, [movieId]);

  return (
    <div className={css.outletWrapper}>
      {status === STATUSES.pending && (
        <p style={{ marginTop: 20 }}>Loading...</p>
      )}

      {status === STATUSES.success && cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(({ id, name: authorName, profile_path, character }) => {
            const isHaveBracket = character.includes('(');
            return (
              <li key={id} className={css.castItem}>
                <img
                  src={
                    profile_path ? basePosterImgPath + profile_path : defaultImg
                  }
                  alt={authorName ? authorName : 'profile'}
                  width="120"
                />
                <p style={{ fontWeight: 600 }}>{authorName}</p>
                {character && (
                  <p>
                    Character:{' '}
                    {isHaveBracket
                      ? character.slice(0, character.indexOf('('))
                      : character}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {status === STATUSES.error && <ErrorMessage error={error} />}
    </div>
  );
}

export default Cast;
