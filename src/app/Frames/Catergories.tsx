"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Img, Text } from "../components";
import { useGetQuery } from "../hooks/useGetQuery";
const CategoryCard = dynamic(()=> import("../components/CategoryCard"))

const Catergories = () => {
  const { data: categories, loading, error } = useGetQuery("/categories");

  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div className="sm:w-full w-[50%]">
      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start mb-10 md:ml-[0] ml-[148px] md:px-5">
        <Text className="font-bold text-gray_900" as="h2" variant="h2">
          Catergories
        </Text>
        <div className="flex flex-col gap-2 items-start justify-start w-[544px] sm:w-full">
          {categories &&
            categories.map((category: any, index: number) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catergories;
