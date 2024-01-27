import css from './Reviews.module.css';
import { STATUSES } from 'utils/constants';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { useEffect, useState } from 'react';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

function Reviews(props) {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results: reviews } = await getMovieReviews(movieId);
        setStatus(STATUSES.success);
        setReviews(reviews);
      } catch (error) {
        setStatus(STATUSES.error);
        setError(error);
        console.log('Oops');
      }
    };
    fetchReviewsById(movieId);
  }, [movieId]);

  return (
    <div className={css.outletWrapper}>
      {status === STATUSES.pending && (
        <p style={{ marginTop: 20 }}>Loading...</p>
      )}
      {status === STATUSES.success && reviews.length === 0 && (
        <p className={css.emptyReviews}>
          We don’t have any reviews for this movie
        </p>
      )}
      {status === STATUSES.success && reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews?.map(({ id, author, content }) => {
            return (
              <li key={id} className={css.reviewItem}>
                <h4>Author: {author}</h4>
                <p className={css.reviewText}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {status === STATUSES.error && <ErrorMessage error={error} />}
    </div>
  );
}

export default Reviews;
