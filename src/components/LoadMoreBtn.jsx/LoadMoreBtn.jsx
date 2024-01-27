import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.loadMoreBtnBox}>
      <button className={css.loadMoreBtn} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
