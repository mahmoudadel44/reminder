import React, { Component } from "react";
import { NavShape, H } from "../styled.js";
export class Navbar extends Component {
  render() {
    return (
      <NavShape>
        <H className="reminderHeader">Reminder Appplication</H>
      </NavShape>
    );
  }
}

export default Navbar;
