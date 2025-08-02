import React from "react";
import css from "./Hero.module.css";
import Logo from "../Logo";

export default function Main() {
  return (
    <>
      <section className="hero">
        <div className="main__container container">
          <div className={css.logoContainer}>
            <Logo width={"160px"} height={"120px"}></Logo>
            <p className={css.ambassador}>C&R</p>
          </div>

          <div className={css.info}>
            <h1 className={css.title}>ColoRawe</h1>
            <h2 className={css.subtitle}>Your dream Nike</h2>
            <p className={css.descrp}>
              On this site you can find custom Nike sneakers of your dreams. The
              original company caт`t create such beautiful sneakers as we do.
              Good luck finding your way in the world of custom sneakers.
            </p>
          </div>

          <button className={css.btn}>Buy my Nike</button>
        </div>
      </section>
    </>
  );
}
