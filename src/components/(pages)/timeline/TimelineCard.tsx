"use client";

import React, { useState } from "react";
import moment from "moment";
import Image from "next/image";
import Button from "@/components/global/Button";

export default function TimelineCard({
  heading,
  desc,
  date,
  image,
  buttonText,
  buttonLink,
}: {
  key: string;
  heading: string;
  desc: string;
  date: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <div className="mb-10 ms-4 px-4 font-sans md:py-6">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-primary dark:bg-gray-700" />
      <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {moment(date).format("MMM Do YYYY")}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {heading}
      </h3>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        {desc}
      </p>
      {image && (
        <div className="relative aspect-video w-80 overflow-hidden rounded-2xl">
          <Image src={image} fill alt={image} style={{ objectFit: "cover" }} />
        </div>
      )}
      {buttonText && (
        <a
          href={buttonLink}
          target="_blank"
          className="mt-4 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          {buttonText}
          <svg
            className="ms-2 h-3 w-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
