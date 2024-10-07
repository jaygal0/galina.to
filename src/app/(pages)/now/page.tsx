import React, { useEffect, useState } from "react";
import Age from "../../../components/Age";
import HeroText from "@/components/global/HeroText";
import GeneralCard from "../../../components/(pages)/now/GeneralCard";
import FadeInComponent from "@/components/global/FadeIn";
import CardData from "@/components/(pages)/now/CardData";

async function getData() {
  const res = await fetch("https://lichess.org/api/account", {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export default async function Page() {
  const lichess = await getData();

  return (
    <FadeInComponent>
      <HeroText
        key="0"
        heading="What I'm up to Now"
        desc="After a month full of activities and fun, it's time for me to get back to my usual routines and do a little spring cleaning."
        now={Date.now()}
      />
      {/* TODO 3: Fade in content a little later to cater to information jumping */}
      <div className="my-12 mb-32 flex flex-col gap-8 font-sans">
        <GeneralCard heading="Age">
          <Age />
        </GeneralCard>
        <GeneralCard heading="Location">
          <CardData nowData="Göteborg, Sweden" />
        </GeneralCard>
        <GeneralCard heading="Career">
          <CardData nowData="Lead UX Designer at Orbi" />
        </GeneralCard>
        <GeneralCard heading="Reading">
          <CardData nowData="{ book } by { author }" />
        </GeneralCard>
        <GeneralCard heading="LiChess Rating">
          <CardData nowData={`Rapid: ${lichess.perfs.rapid.rating}`} />
          <p className="mt-6">
            Live from{" "}
            <a href={lichess.url} className="underline" target="_blank">
              LiChess
            </a>{" "}
          </p>
        </GeneralCard>
      </div>
    </FadeInComponent>
  );
}
