import React from "react";
import css from "./logo.module.css";
import img from "../images/logo.svg";
export default function Logo({ width, height }) {
  return (
    <>
      <div className={css.imgContainer} style={{ width, height }}>
        <img src={img} alt="ColoRave Logo" />
      </div>
    </>
  );
}
