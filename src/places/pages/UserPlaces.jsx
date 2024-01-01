import React from "react";
// useParams only used in functional components
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
