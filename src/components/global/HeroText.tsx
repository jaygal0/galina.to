"use client";
import moment from "moment";
import { textComponents } from "../../types";

export default function HeroText({ heading, desc, now }: textComponents) {
  return (
    <div className="w-full px-40 pb-10">
      <h1 className="font-bold text-3xl">{heading}</h1>
      <div className="text-base pb-10">{desc}</div>
      {now && (
        <div className="text-sm text-stone-700">
          Last Updated: {moment(now).format("MMMM Do YYYY")}. Inspired by{" "}
          <a href="https://sive.rs/nowff" className="underline" target="_blank">
            Derek Sivers
          </a>
        </div>
      )}
    </div>
  );
}
