"use client";
import dynamic from "next/dynamic";
import { useGetQuery } from "./hooks/useGetQuery";
const Header = dynamic(() => import("./Frames/Header"));
const Highlights = dynamic(() => import("./Frames/Highlights"));
const Footer = dynamic(() => import("./Frames/Footer"));
const Section = dynamic(() => import("./Frames/Section"));

export default function Home() {
  const { data: highlights, loading, error } = useGetQuery("/highlights");
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-ibmplexmono items-center justify-start mx-auto w-full">
        <Header highlights={highlights} loading={loading} error={error} />
        <Highlights highlights={highlights} loading={loading} error={error} />
        <Section />
      </div>
      <Footer />
    </>
  );
}
