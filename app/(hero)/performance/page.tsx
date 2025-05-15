import Hero from "@/components/hero";
import React from "react";
import homeSrc from '/public/2.jpg'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
  description: "Performance page",
};

export default function Page() {
  return <div><Hero
  imgUrl={homeSrc}
  altTxt="Home"
  content={"Welcome to the performance page!"}
/></div>;
}
