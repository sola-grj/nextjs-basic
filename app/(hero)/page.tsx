import React from "react";
import Hero from "@/components/hero";
import homeSrc from "/public/1.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Page() {
  return (
    <Hero
      imgUrl={homeSrc}
      altTxt="Home"
      content={"Welcome to the home page!"}
    />
  );
}
