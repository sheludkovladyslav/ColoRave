import css from "./Advantages.module.css";
import { AdvantageItem } from "./AdvantageItem";
import delivery from "../../images/delivery.png";
import stars from "../../images/stars.png";
import paint from "../../images/paint.png";

export const Advantages = ({}) => {
  return (
    <ul className={css.list}>
      <AdvantageItem text={"Premium Quality"} img={stars}></AdvantageItem>
      <AdvantageItem text={"Indelible paint"} img={paint}></AdvantageItem>
      <AdvantageItem text={"Fast shipping"} img={delivery}></AdvantageItem>
    </ul>
  );
};
