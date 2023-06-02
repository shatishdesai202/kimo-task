import React, { useState } from "react";
import { Text } from "../Text";
import { Img } from "../Img";

const CategoryCard = ({ category }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white_A700 flex flex-row gap-2.5 items-center justify-between p-6 sm:px-5 rounded-lg w-full"
      >
        <Text className="font-normal text-gray_900 w-auto" as="h2" variant="h2">
          {category?.name}
        </Text>
        <Img
          src="/images/img_arrowright.svg"
          className={isHovered ? "h-4 w-4 rotate-90" : "h-4 w-4"}
          alt="arrowright"
        />
      </div>

      {isHovered && (
        <ul className="px-16">
          {category.activities.map((item: any) => (
            <pre key={item?.title}>
              <li className="list-disc">{item?.title}</li>
            </pre>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryCard;
