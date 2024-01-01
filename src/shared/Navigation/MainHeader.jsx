import React from "react";

import "./MainHeader.css";

export default function MainHeader(props) {
  return (
    <header className="main-header">
      {props.children}
      {/*props.children is the content between the <MainHeader> opening and closing tag </MainHeader>*/}
    </header>
  );
}
