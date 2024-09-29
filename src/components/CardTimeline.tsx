"use client";

import React, { useRef, useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const Timeline = ({
  start,
  heading,
  desc,
  date,
  category,
  image,
  buttonText,
  buttonLink,
}: {
  start?: Boolean;
  heading: string;
  desc: string;
  date: string;
  category: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const [isClicked, setIsClicked] = useState<Boolean>(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(!isHovered);
      }}
      onMouseLeave={() => {
        setIsHovered(!isHovered);
      }}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <div>
        <div>
          <Image
            src={
              category == "career"
                ? "/work.svg"
                : category == "education"
                  ? "/education.svg"
                  : "/placeholder-timeline.svg"
            }
            width={48}
            height={48}
            alt={category}
          />
          <div>
            <div>{moment(date).format("MMM")}</div>
            <div>{moment(date).format("YYYY")}</div>
          </div>
        </div>
      </div>
      <div className={start && "start"} />
      <div className={isClicked && "isClicked"}>
        <div>{heading}</div>
        <div className={isClicked && "isClicked"}>
          {desc}
          {buttonText && <Button cta={buttonText} link={buttonLink} />}
        </div>

        {image ? (
          <div className={isClicked && "isClicked"}>
            <Image
              src={`${image}`}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              alt={image}
            />
          </div>
        ) : null}
      </div>
      <div className={isHovered && "hover"}>
        {isClicked ? "collapse" : "expand"}
      </div>
    </div>
  );
};

export default Timeline;
