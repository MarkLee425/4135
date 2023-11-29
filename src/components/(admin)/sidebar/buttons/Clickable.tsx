"use client";

import React from "react";
import { ClickableProps } from "../Interface";
import { useRouter } from "next/navigation";
import { styles } from "../constant";

const Clickable = ({ text, icon, route, isCurrentRoute }: ClickableProps) => {
  const router = useRouter();
  return (
    // focus: #ffaeae
    <div
      className={
        `card ${isCurrentRoute ? styles.color.onPage.bg : "bg-transparent"} ${isCurrentRoute ? styles.color.onPage.hover : styles.color.outPage.hover} hover:cursor-pointer rounded-lg min-h-[2.5rem] leading-[2.5rem]`
      }
      onClick={() => router.push(`/${route}`)}
    >
      <div className="ml-4 flex ">
        {/* focus: */}
        <div className="mt-[0.8rem] icon">{icon}</div>
        <p className={`ml-3 text-primary leading-[3] inline-block ${isCurrentRoute ? styles.color.onPage.text : styles.color.outPage.text} tracking-wide`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Clickable;
