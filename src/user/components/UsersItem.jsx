import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/component/UIElements/Card";
import Avatar from "../../shared/component/UIElements/Avatar";
import "./UsersItem.css";

export default function UsersItem(props) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          {/*Link is used to make unique endpoint for different users as props.id is unique */}
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}
