import React from "react";
import SectionContainer from "./SectionContainer";
import { H3, P } from "../Typography";
import Button from "../Button/Button";

const InfoRow = ({ className, title, button, desc, link = "/" }) => {
  return (
    <div
      className={`h-24 border-t-2 border-solid border-black font-jakarta flex items-center justify-between max-w-[980px] mx-auto ${className}`}
    >
      <H3>{title}</H3>
      {button ? (
        <Button arrow bgColor={"bg-transparent"} link={link}>
          Learn More
        </Button>
      ) : (
        <P>{desc}</P>
      )}
    </div>
  );
};

export default InfoRow;
