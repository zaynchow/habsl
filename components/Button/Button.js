import React from "react";
import Link from "next/link";
import P from "../Typography/P";

const Button = ({
  link,
  children,
  bgColor,
  outline,
  className,
  arrow = false,
}) => {
  return (
    <Link
      className={`pl-9 py-2.5 ${
        arrow ? "pr-7" : "pr-9"
      } ${bgColor} font-jakarta font-medium rounded-[50px] tracking-[0.5px] inline-block ${
        outline && "border-2 border-black border-solid"
      } ${className}`}
      href={link}
    >
      <P
        className={`inline-block ${
          bgColor == "bg-blue" || bgColor == "bg-black"
            ? "text-white"
            : "text-black"
        }`}
      >
        {children}
      </P>
      {arrow && (
        <img
          className="inline-block ml-2 "
          src="/icons/arrow-right.svg"
          width={20}
          height={20}
        />
      )}
    </Link>
  );
};

export default Button;
