import React from "react";
import { Text } from "../Text";

const Description = ({ description }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start max-w-[1136px] mt-[41px] mx-auto md:px-5 w-full">
        <div className="flex flex-col gap-[21px] justify-start w-full">
          <Text
            className="font-bold text-gray_900 flex justify-center"
            as="h1"
            variant="h1"
          >
            Description
          </Text>
        </div>
      </div>
      <div>
        <div className="px-10 flex flex-col items-center justify-start max-w-[1136px] mt-[41px] mx-auto md:px-5 w-full py-4">
          <div className="flex flex-col gap-[21px] items-start justify-start w-full">
            <Text className="font-bold text-gray_900" as="h2" variant="h2">
              {description}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
