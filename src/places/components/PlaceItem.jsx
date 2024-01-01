import React from "react";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import "./PlaceItem.css";

export default function PlaceItem(props) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>View on Map</Button>{" "}
          {/*inverse props is used to change the color of the button as defined in the Button component  */}
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
}
