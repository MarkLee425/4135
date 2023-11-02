import React from "react";
import { ButtonProps } from "./interface";
import Image from "next/image";

const Button = ({ type, txt, icon, variant }: ButtonProps) => {
  return (
    <div>
      <button
        className={`flexCenter gap-3 rounded-2xl ${variant}`}
        type={type}
      >
        {icon && <Image src={icon} alt={txt} width={24} height={24} />}
        <label style={{cursor: "pointer"}}>{txt}</label>
      </button>
    </div>
  );
};

export default Button;
