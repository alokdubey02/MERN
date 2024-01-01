import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

export default function SideDrawer(props) {
  const content = (
    // CSSTransition is used for transition animations (download as npm install react-transition-group ) and in CSSTransition className is classNames it is predefined by CSSTransition.
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      // mountOnEnter or unmountOnExit is used for to add or to remove the example (aside) from the dom  when it is visible or invisible otherwise it only animated out or in depends on the state
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
}
