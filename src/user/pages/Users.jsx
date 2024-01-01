import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Alok Dubey",
      image: "https://avatars.githubusercontent.com/u/120581940?v=4",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
