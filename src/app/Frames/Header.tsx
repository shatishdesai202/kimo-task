import React from "react";
import { Button, Img, List, Text } from "../components";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";

const Header = ({ imageURL, placeName, highlights }: any) => {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <div className="h-[560px] md:px-5 relative w-full">
      <Img
        src={imageURL ? imageURL : "/images/img_image.png"}
        className="h-[560px] m-auto object-cover w-full"
        alt="image"
      />
      <div className="absolute flex flex-col md:gap-10 gap-[72px] inset-x-[0] items-center justify-start mx-auto sm:top-[0%] top-[4%] w-[76%] sm:w-[100%] ">
        <header className="sm:hidden bg-white_A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between sm:px-5 px-6 rounded-[12px] w-full">
          <div className="flex sm:flex-1 flex-row font-ibmplexmono gap-20 items-center justify-start w-auto sm:w-full">
            <Link href={"/"}>
              <Img
                src="/images/img_signal.svg"
                className="h-[35px] w-[94px]"
                alt="signal"
              />
            </Link>
            <ul className="flex flex-row gap-10 sm:hidden items-center justify-start w-auto common-row-list">
              <li>
                <Link href="/" className="font-normal text-gray_900">
                  <Text as="h2" variant="h2">
                    Home
                  </Text>
                </Link>
              </li>
              {highlights &&
                highlights.map((highlight: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={`/place?name=${highlight?.title}`}
                      className="font-normal text-gray_900"
                    >
                      <Text as="h2" variant="h2">
                        {highlight?.title}
                      </Text>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Button
            className="cursor-pointer font-bold font-greycliffcf min-w-[128px] text-base text-center text-white_A700"
            shape="RoundedBorder8"
            size="sm"
            variant="FillTeal600"
          >
            Book a trip
          </Button>
        </header>
        <header className="hidden sm:block bg-white_A700 h-20 w-full px-5">
          <div className="flex h-full justify-between items-center">
            <Link href={"/"}>
              <Img
                src="/images/img_signal.svg"
                className="h-[35px] w-[94px]"
                alt="signal"
              />
            </Link>
            <div onClick={() => setIsToggle(true)}>
              <Img
                src="/images/menu.png"
                className="h-[20px] w-[30px]"
                alt="signal"
              />
            </div>
          </div>
        </header>
        <Text
          className="bg-clip-text bg-gradient  leading-[132.00px] text-center text-transparent"
          as="h3"
          variant="h3"
        >
          {!placeName && (
            <span className="md:text-5xl text-white_A700_7f text-[140px] font-ibmplexmono font-bold">
              <>
                Welcome
                <br />
                to
              </>
            </span>
          )}
          <span className="md:text-5xl text-white_A700_7f text-[140px] tracking-[-32.20px] font-ibmplexmono font-bold">
            {" "}
          </span>
          <span className="md:text-5xl text-white_A700_7f text-[140px] font-ibmplexmono font-bold">
            {placeName ? placeName : "Hawaii"}
          </span>
        </Text>
      </div>
      <Drawer
        anchor="right"
        onClose={() => setIsToggle(false)}
        open={isToggle}
        PaperProps={{
          sx: {
            width: "90%",
          },
        }}
      >
        <div className="p-5 flex justify-end">
          <Img
            onClick={() => setIsToggle(false)}
            src="/images/close.svg"
            className="h-[25px] w-[25px]"
            alt="signal"
          />
        </div>
        <div className="px-10 py-5">
          <Link href="/" className="font-normal text-gray_900">
            <Text style={{ fontFamily: "IBM Plex Mono" }} as="h2" variant="h2">
              Home
            </Text>
          </Link>
        </div>
        {highlights &&
          highlights.map((highlight: any, index: number) => (
            <div key={index} className="px-10 py-5">
              <Link
                href={`/place?name=${highlight?.title}`}
                className="font-normal text-gray_900"
              >
                <Text
                  as="h2"
                  style={{ fontFamily: "IBM Plex Mono" }}
                  variant="h2"
                >
                  {highlight?.title}
                </Text>
              </Link>
            </div>
          ))}
        <div className="px-10">
          <Button
            className="px-6 cursor-pointer font-bold font-greycliffcf text-base text-center text-white_A700"
            shape="RoundedBorder8"
            size="sm"
            variant="FillTeal600"
          >
            Book a trip
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
