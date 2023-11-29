"use client";

import React from "react";
import { ButtonProps } from "./interface";
import Image from "next/image";

const Button = ({ type, txt, icon, variant, onSubmit=undefined, onClick=undefined }: ButtonProps) => {
  return (
    <div>
      <button
        className={`flexCenter gap-3 rounded-2xl text-sm ${variant}`}
        type={type}
        onSubmit={onSubmit && onSubmit}
        onClick={onClick && onClick}
      >
        {icon && <Image src={icon} alt={txt} width={12} height={12} />}
        <label style={{cursor: "pointer"}}>{txt}</label>
      </button>
    </div>
  );
};

export default Button;
