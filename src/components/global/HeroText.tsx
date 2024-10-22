"use client";
import moment from "moment";
import { textComponents } from "../../types";

export default function HeroText({ heading, desc, now }: textComponents) {
  return (
    <div className="w-full px-6 pb-8 pt-56 font-sans md:px-40 md:pb-12 md:pt-72">
      <h1 className="mb-4 text-3xl font-bold capitalize md:text-5xl">
        {heading}
      </h1>
      <div className="mb-0 text-lg leading-relaxed md:mb-8 md:pb-10 md:text-2xl">
        {desc}
      </div>
      {now && (
        <div className="text-sm text-stone-700">
          Last Updated: {moment(now).format("MMM Do YYYY")}. Inspired by{" "}
          <a href="https://sive.rs/nowff" className="underline" target="_blank">
            Derek Sivers
          </a>
        </div>
      )}
    </div>
  );
}
