"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../constants";
import Button from "../buttons/Button";
import Login from "./LoginButton";

const Navbar = () => {
  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src="/icon.svg"
              alt="logo"
              width={70}
              height={100}
              loading="lazy"
              style={{width: "auto", height: "auto"}}
            />
            <h1 className="font-extrabold text-transparent ml-3 uppercase text-2xl bg-clip-text bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800">
              Inspectron
            </h1>
          </div>
        </Link>
        <ul className="hidden h-full gap-5 lg:flex">
          {NAV_LINKS.map((each) => (
            <li key={each.key}>
              <Link
                href={each.href}
                key={each.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {each.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Link href="/signup">
            <Button
              type="button"
              txt="Sign Up"
              icon="/signup.png"
              variant="btn_dark_green"
            ></Button>
          </Link>
          <Login />
        </div>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    </>
  );
};

export default Navbar;
