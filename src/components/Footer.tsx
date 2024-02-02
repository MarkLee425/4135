"use client";
import React from "react";
import {
  FOOTER_BEGIN,
  FOOTER_MIDDLE,
  FOOTER_POLICY,
  FOOTER_TERMS_CONDITION,
} from "@/constants";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-2 text-sm ml-3 text-gray-tertiary right-5 lg:left-72">
        <div className="flex justify-between">
          <div>
            <p>{FOOTER_BEGIN}</p>
          </div>
          <div className="flex">
            <p>{FOOTER_MIDDLE}</p>
            <a
              href="https://github.com/MarkLee425"
              className="ml-1 text-orange-primary"
            >
              Mark Lee
            </a>
            <FaHeart
              style={{ color: "#ff7f7f", margin: "auto", marginLeft: "0.3rem" }}
            />
          </div>
          <div className="flex px-5">
            <a href="">{FOOTER_TERMS_CONDITION}</a>
            <p className="ml-2 mr-2"> | </p>
            <a href="">{FOOTER_POLICY}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
