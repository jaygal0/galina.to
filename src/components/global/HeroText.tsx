"use client";
import moment from "moment";
import { textComponents } from "../../types";

export default function HeroText({ heading, desc, now }: textComponents) {
  return (
    <div className="w-full px-40 py-72 pb-10 font-sans">
      <h1 className="text-5xl font-bold capitalize">{heading}</h1>
      <div className="mb-8 pb-10 text-2xl leading-relaxed">{desc}</div>
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
