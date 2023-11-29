"use client";

import React from "react";
import { ClickableProps } from "../Interface";
import { useRouter } from "next/navigation";
import { styles } from "../constant";

const Signout = ({ text, icon, route, isCurrentRoute }: ClickableProps) => {
  const router = useRouter();
  return (
    <div
      className={
        `card bg-transparent ${styles.color.outPage.hover} hover:cursor-pointer rounded-lg min-h-[2.5rem] leading-[2.5rem] fixed bottom-3 px-10`
      }
      onClick={() => router.push(`/${route}`)}
    >
      <div className="flex">
        <div className="mt-[0.8rem] icon">{icon}</div>
        <p className={`ml-3 text-primary leading-[3] inline-block ${styles.color.outPage.text} tracking-wide`}>
          Signout
        </p>
      </div>
    </div>
  );
};

export default Signout;
