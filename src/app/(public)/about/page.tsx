import React from "react";
import { ABOUT_PAGE_DESCRIPTION, ABOUT_PAGE_HEADER, ABOUT_PAGE_MISSION } from "@/constants";

const About = () => {
  return (
    <>
      <div className="max-container mt-8 padding-container w-[80%]">
        <div className="text-justify">
          <p className="text-center mb-10 tracking-tight mt-20   text-orange-primary uppercase font-sans font-semibold">about us</p>
          <h1 className="text-5xl text-center mb-40">We are Inspectron</h1>
        </div>
        <h1 className="text-5xl mb-28 font-semibold leading-normal">{ABOUT_PAGE_HEADER}</h1>

        <div className="flex">
          <div id="mission" className=" table-cell border-2 w-[50%] align-middle">
            <h1 className="text-5xl">Our Mission</h1>
            <p className="mt-10 text-justify">{ABOUT_PAGE_MISSION}</p>
          </div>
            <img src="/security.png" className="rounded-full float-right ml-auto" width={500} height={500}/>  
        </div>
      </div>
    </>
  );
};

export default About;
