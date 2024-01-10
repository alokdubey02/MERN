import React from "react";
import { useState } from "react";
import Button from "../../shared/component/FormElements/Button";
import Card from "../../shared/component/UIElements/Card";
import Map from "../../shared/component/UIElements/Map";
import Modal from "../../shared/component/UIElements/Modal";
import "./PlaceItem.css";

export default function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);

  const openMaphandler = () => setShowMap(true);
  const closeMaphandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMaphandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMaphandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
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
            <Button inverse onClick={openMaphandler}>
              View on Map
            </Button>{" "}
            {/*inverse props is used to change the color of the button as defined in the Button component  */}
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}
