import React from "react";
import { Img } from "../components";

const Footer = () => {
  return (
    <div className="bg-gray_900 flex flex-col items-center justify-center  w-full">
      <Img
        src="/images/img_frame10.svg"
        className="h-20 sm:pl-8  mx-auto w-full"
        alt="frameTen"
      />
    </div>
  );
};

export default Footer;
