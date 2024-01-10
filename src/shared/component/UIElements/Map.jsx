import React, { useRef } from "react";
import { useEffect } from "react";

import "./Map.css";

export default function Map(props) {
  // useRef is used to create for the reference a pointer a real dom node, it is also used to create variable which survives the rerender cycle of the components and don't loose the values
  const mapRef = useRef();

  //   this is object destructuring default javascript feature which will pull keys and values from the props and stores into the new constants
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}
