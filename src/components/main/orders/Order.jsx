import React from "react";
import css from "./Order.module.css";

export default function Order() {
  return (
    <>
      <h2 className={css.title}>Order</h2>
      <form action="" className={css.form}>
        <div className={css.emailContainer}>
          <input
            type="text"
            placeholder="Write your email"
            className={`${css.input} ${css.email}`}
          />
          <button className={css.btnConfirm}>Confirm</button>
        </div>
        <input type="text" placeholder="Your Country" className={css.input} />
        <input type="text" placeholder="Your City" className={css.input} />
        <input type="text" placeholder="Your Adress" className={css.input} />

        <button className={css.submitBtn}>Order My Nike</button>
      </form>
    </>
  );
}
