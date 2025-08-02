import css from "./Nav.module.css";

import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };
  }

  componentDidMount() {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html"
    ) {
      this.setState({
        isActive: true,
      });
    }
  }

  render() {
    return (
      <ul className={css.list}>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Main page
          </a>
        </li>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Benefits
          </a>
        </li>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Advantages
          </a>
        </li>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Reviews
          </a>
        </li>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Contacts
          </a>
        </li>
        <li className={css.item}>
          <a href="" className={this.state.isActive && "active"}>
            Order
          </a>
        </li>
      </ul>
    );
  }
}
