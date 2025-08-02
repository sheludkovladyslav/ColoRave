import css from "./ReviewsItem.module.css";

export const ReviewsItem = ({ reviewText, date, img, name, start }) => {
  return (
    <li className={css.item}>
      <div className={css.reviewContainer}>
        <h2 className={css.review}>{reviewText}</h2>
        <p className={css.date}>{date}</p>
      </div>

      <div className={css.authorContainer}>
        <div className={css.imgContainer}>
          <img src={img} alt="Author" />
        </div>
        <div className={css.authorInfo}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.start}>With us from {start}</p>
        </div>
      </div>
    </li>
  );
};
