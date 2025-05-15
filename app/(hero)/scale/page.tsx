import React from "react";
import homeSrc from '/public/2.jpg'
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
  description: "Scale page",
};

export default function Page() {
  return <div><Hero
  imgUrl={homeSrc}
  altTxt="Home"
  content={"Welcome to the home page!"}
/></div>;
}
