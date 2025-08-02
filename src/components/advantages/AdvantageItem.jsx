import css from "./AdvantageItem.module.css";

export const AdvantageItem = ({ text, img }) => {
  return (
    <li className={css.item}>
      <h2 className={css.title}>{text}</h2>
      <div className={css.imgContainer}>
        <img src={img} alt="Advantage" />
      </div>
    </li>
  );
};
