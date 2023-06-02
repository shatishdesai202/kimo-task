import React from "react";
import { Button, Img, Text } from "../components";

const TravelGuide = () => {
  return (
    <div className=" sm:w-full w-[50%] flex md:flex-1 flex-col gap-[15px] items-start justify-start md:px-5">
      <Text className="font-bold text-gray_900" as="h2" variant="h2">
        Travel Guide
      </Text>
      <div className="bg-white_A700 flex flex-col items-center justify-start p-[18px] rounded-lg w-full">
        <div className="flex flex-row items-end justify-between mb-[5px] w-[98%] md:w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-ibmplexmono text-gray_900"
              as="h1"
              variant="h1"
            >
              Hadwin Malone
            </Text>
            <Text
              className="font-ibmplexmono font-normal text-gray_900"
              as="h2"
              variant="h2"
            >
              Guide since 2012
            </Text>
            <Button
              className="cursor-pointer font-bold font-greycliffcf min-w-[107px] mt-[39px] text-base text-center text-teal_600"
              shape="RoundedBorder8"
              size="sm"
              variant="OutlineTeal600"
            >
              Contact
            </Button>
          </div>
          <Img
            src="/images/img_ellipse10.png"
            className="h-32 md:h-auto mt-[5px] rounded-[50%] w-32"
            alt="ellipseTen"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
