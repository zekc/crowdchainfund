import React from "react";
import PageHeading from "../Components/PageHeading";
import RandF from "../Components/RandF";
import Newsletter from "../Components/Newsletter";
import Scrolly from "../Components/Scrolly";
import Creator from "../Components/Creator";

function HomePage() {
  return (
    <>
      {/* <PageHeading /> */}
      <RandF />
      <Newsletter />
      <Scrolly />
      <Creator />
    </>
  );
}

export default HomePage;
