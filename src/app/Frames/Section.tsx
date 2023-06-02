import React from "react";
import Catergories from "./Catergories";
import TravelGuide from "./TravelGuide";

const Section = () => {
  return (
    <div className=" bg-teal_50 flex md:flex-col flex-row gap-8 items-start justify-start mt-20 p-[39px] sm:px-5 w-full">
      <Catergories />
      <TravelGuide />
    </div>
  );
};

export default Section;
