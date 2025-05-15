import Hero from "@/components/hero";
import React from "react";
import homeSrc from '/public/1.jpg'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
  description: "Reliability page",
};

export default function Page() {
  return <div><Hero
  imgUrl={homeSrc}
  altTxt="Home"
  content={"Welcome to the reliability page!"}
/></div>;
}
