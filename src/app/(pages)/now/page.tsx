import React, { useEffect, useState } from "react";
import Age from "../../../components/Age";
import HeroText from "@/components/global/HeroText";
import LocationNow from "../../../components/LocationNow";
import NowText from "../../../components/NowText";
import ProfessionNow from "../../../components/ProfessionNow";
import { ExternalLink, IndexMain } from "../../../../styles";
import Meta from "../../../components/Meta";
import LocationPrevious from "../../../components/LocationPrevious";
import ProfessionPrevious from "../../../components/ProfessionPrevious";
import GeneralCard from "../../../components/now/GeneralCard";
import FadeInComponent from "@/components/global/FadeIn";

async function getData() {
  const res = await fetch("https://lichess.org/api/account", {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
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
        heading="What I'm up to now"
        desc="hello"
        now={Date.now()}
      />
      {/* TODO: PRIO 3 Fade in content a little later to cater to information jumping */}
      <div className="my-8 flex flex-col gap-8">
        <GeneralCard heading="Age">
          <Age />
        </GeneralCard>
        <GeneralCard heading="Location">
          <p>Gothenburg, Sweden</p>
        </GeneralCard>
        <GeneralCard heading="Career">
          <p>Lead UX Designer at Orbi</p>
        </GeneralCard>
        <GeneralCard heading="Reading">
          <p>Book</p>
          <p>By Author</p>
        </GeneralCard>
        <GeneralCard heading="LiChess Rating">
          <p>Rating</p>
          <p>{lichess.perfs.rapid.rating}</p>
          <p>
            Live from{" "}
            <a href={lichess.url} target="_blank">
              LiChess
            </a>{" "}
          </p>
        </GeneralCard>
      </div>
    </FadeInComponent>
  );
}
