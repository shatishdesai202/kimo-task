"use client";

import React, { CSSProperties, useState } from "react";
import { useGetQuery } from "../hooks/useGetQuery";
import Loader from "../components/Loader";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Frames/Header"));
const Description = dynamic(() => import("../components/Description"));
const Activities = dynamic(() => import("../components/Activities"));
const Footer = dynamic(() => import("../Frames/Footer"));

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const page = (props: any) => {
  const searchLocation = props?.searchParams;
  let [color, setColor] = useState("#ffffff");

  const {
    data: placeData,
    loading,
    error,
  } = useGetQuery(`/activities/${props?.searchParams.name}`);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white_A400 flex flex-col font-ibmplexmono items-center justify-start mx-auto w-full">
      <Header imageURL={placeData?.image} placeName={searchLocation.name} />
      <div className="bg-teal_50 w-full">
        <div>
          <Activities listData={placeData?.activities} />
        </div>
        <div>
          <Description description={placeData?.description} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
