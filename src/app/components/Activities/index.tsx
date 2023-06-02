import dynamic from "next/dynamic";
import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";

const Activities = ({ listData }: any) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start max-w-[1136px] mt-[41px] mx-auto md:px-5 w-full">
        <div className="flex flex-col gap-[21px] justify-start w-full">
          <Text
            className="font-bold text-gray_900 flex justify-center"
            as="h1"
            variant="h1"
          >
            Activities
          </Text>
        </div>
      </div>
      <div className="grid flex-col grid-cols-3 mx-52">
        {listData &&
          listData.map((item: any) => (
            <div
              key={item.name}
              className="flex justify-center px-3 items-center p-1 my-3 "
            >
              <Text
                className="w-52 rounded-lg bg-white_A700 p-4 text-center font-normal text-gray_900 bg-white_A700"
                as="h2"
                variant="h2"
              >
                {item.name}
              </Text>
            </div>
          ))}
      </div>
    </>
  );
};

export default Activities;
