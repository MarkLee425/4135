import React from "react";
import Link from "next/link";
import Button from "../components/Button";

import { HOME_PAGE_HEADER, HOME_PAGE_DESCRIPTION } from "../constants";

export default function Home() {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py20 xl:flex-row border-2 border-red-500 mt-7">
        <div className="relative z-20 flex flex-1 flex-col">
          <h1 className="font-extrabold text-transparent text-8xl flex justify-center items-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {HOME_PAGE_HEADER}
          </h1>
          <p className="text-xl mt-7 text-gray-30 flex justify-center items-center">
            {HOME_PAGE_DESCRIPTION}
          </p>
          {/* Add photo? Live video? */}
          <div className="flex justify-center items-center mt-20">
            <Link href="/signup">
              <Button
                type="button"
                txt="Get Started"
                icon=""
                variant="btn_dark_green"
              ></Button>
            </Link>
            <Link href="/about">
              <Button
                type="button"
                txt="Learn more"
                icon=""
                variant="btn_dark_green ml-6"
              ></Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
