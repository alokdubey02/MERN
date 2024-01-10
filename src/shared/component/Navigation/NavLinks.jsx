import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        {/*NavLink is used to analyse the url and allow us to work differently so that users now the current active link (as for example here color changes on current url active pages)*/}
        <NavLink to="/" exact>
          All USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
}
