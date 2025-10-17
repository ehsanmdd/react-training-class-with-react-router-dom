import React from "react";
import Header from "../components/Header/Index";
import Users from "../components/Users";
import Gallery from "../components/Gallery";

function HomePage() {
  return (
    <div>
      <Gallery />
      <Users />
    </div>
  );
}

export default HomePage;
