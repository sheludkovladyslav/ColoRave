import React from "react";
import css from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  return (
    <div className={css.container}>
      <button className={css.btn}>UA</button>
      <button className={`${css.btn} ${css.active}`}>ENG</button>
    </div>
  );
}
