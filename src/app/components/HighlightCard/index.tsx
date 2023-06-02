import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import Link from "next/link";

const HighlightCard = ({ image, title, description }: any) => {
  return (
    <div className="bg-white_A700 flex flex-col items-start justify-start rounded-lg shadow-bs w-auto">
      <Img
        src={image}
        className="h-[170px] sm:h-auto object-cover rounded-tl-lg rounded-tr-lg w-[368px] md:w-full"
        alt="image"
      />
      <div className="flex flex-col gap-1.5 h-[170px] md:h-auto items-start justify-between p-6 sm:px-5 w-full">
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
          <Text className="text-teal_600 w-auto" as="h1" variant="h1">
            {title}
          </Text>
          <Text
            className="font-normal leading-[20.00px] max-w-[318px] md:max-w-full text-gray_900"
            as="h2"
            variant="h2"
          >
            {description}
          </Text>
        </div>
        <Link href={`/place?name=${title}`}>
          <Img
            src="images/img_bottom.svg"
            className="h-10 w-full cursor-pointer"
            alt="bottom"
          />
        </Link>
      </div>
    </div>
  );
};

export default HighlightCard;
