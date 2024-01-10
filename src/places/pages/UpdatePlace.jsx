import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/component/FormElements/Button";
import Input from "../../shared/component/FormElements/Input";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj hotel",
    description: "One of the Best hotel ",
    imageUrl:
      "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
    address: "Apollo Bunder, Mumbai",
    location: {
      lat: 18.921727,
      lng: 72.83302,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj hotel",
    description: "One of the Best hotel ",
    imageUrl:
      "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
    address: "Apollo Bunder, Mumbai",
    location: {
      lat: 18.921727,
      lng: 72.83302,
    },
    creator: "u2",
  },
];
export default function UpdatePlace() {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid description (min, 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
}
