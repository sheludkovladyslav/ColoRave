import React from "react";
import css from "./Footer.module.css";
import Logo from "../Logo";
export default function Footer() {
  return (
    <>
      <section className={css.footerMain}>
        <ul className={css.questions}>
          <li className={css.question}>Have a question?</li>
          <li className={css.question}>Have a proposal for cooperation?</li>
          <li className={css.question}>Advertising questions?</li>
        </ul>

        <ul className={css.answers}>
          <li className={css.answer}>
            <a href="mailto:ColoRawe_Cooperation@gmail.com">
              ColoRawe_support@gmail.com
            </a>
          </li>
          <li className={css.answer}>
            <a href="mailto:ColoRawe_Cooperation@gmail.com">
              ColoRawe_Cooperation@gmail.com
            </a>
          </li>
          <li className={css.answer}>
            <a href="mailto:ColoRawe_Cooperation@gmail.com">
              ColoRawe_Advertising@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className={css.copyright}>
        <div className={css.copyrightInfo}>
          <p>2022 ColoRawe @All rights reserved</p>
          <p>United States</p>
        </div>
        <div className={css.logoContainer}>
          <Logo width={"108px"} height={"81px"}></Logo>
          <p className={css.ambassador}>C&R</p>
        </div>
      </section>
    </>
  );
}
