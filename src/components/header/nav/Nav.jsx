import css from "./Nav.module.css";

import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };
  }

  render() {
    return (
      <ul className={css.list}>
        <li className={`${css.item} ${css.active}`}>
          <a href="">Main page</a>
        </li>
        <li className={`${css.item} `}>
          <a href="">Benefits</a>
        </li>
        <li className={`${css.item} `}>
          <a href="">Advantages</a>
        </li>
        <li className={`${css.item} `}>
          <a href="">Reviews</a>
        </li>
        <li className={`${css.item} `}>
          <a href="">Contacts</a>
        </li>
        <li className={`${css.item} `}>
          <a href="">Order</a>
        </li>
      </ul>
    );
  }
}
