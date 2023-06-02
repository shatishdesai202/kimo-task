"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import { Img, List, Text } from "../components";
import { useGetQuery } from "../hooks/useGetQuery";
import HighlightCard from "../components/HighlightCard";
import BounceLoader from "react-spinners/BounceLoader";
import Loader from "../components/Loader";

const Highlights = ({ highlights, loading, error }: any) => {
  let [color, setColor] = useState("#ffffff");
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-start max-w-[1136px] mt-[41px] mx-auto md:px-5 w-full">
        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
          <Text className="font-bold text-gray_900" as="h2" variant="h2">
            Highlights
          </Text>
          <List
            className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            {highlights &&
              highlights?.map(({ title, description, image }: any) => (
                <HighlightCard
                  key={title}
                  title={title}
                  description={description}
                  image={image}
                />
              ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
