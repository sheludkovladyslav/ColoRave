import { ReviewsItem } from "./ReviewsItem";
import john from "../../../images/reviews/john.png";
import elizabeth from "../../../images/reviews/elizabeth.png";
import tom from "../../../images/reviews/tom.png";
import css from "./Reviews.module.css";

export const Reviews = ({ props }) => {
  return (
    <>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        <ReviewsItem
          reviewText="Sneakers are very comfortable and well painted, nothing has worn off in a year."
          date="25.11"
          img={john}
          name="John Teylor"
          start="2018"
        ></ReviewsItem>
        <ReviewsItem
          reviewText="I'm very happy with this color scheme. They match all my clothes."
          date="05.01"
          img={elizabeth}
          name="Elizabeth Garsia"
          start="2020"
        ></ReviewsItem>
        <ReviewsItem
          reviewText="Just right if you need to go to a party. I use them actively, the paint is super."
          date="18.06"
          img={tom}
          name="Tom Maquare"
          start="2019"
        ></ReviewsItem>
      </ul>
    </>
  );
};
