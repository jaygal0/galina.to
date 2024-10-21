import React, { useEffect, useState } from "react";
import Age from "../../../components/Age";
import HeroText from "@/components/global/HeroText";
import GeneralCard from "../../../components/(pages)/now/GeneralCard";
import FadeInComponent from "@/components/global/FadeIn";
import CardData from "@/components/(pages)/now/CardData";
import ContentDiv from "@/components/global/ContentDiv";
import moment from "moment";

async function getChessData() {
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

async function getBookData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/books`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

async function getCareerData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/career`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}
async function getLocationData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/location`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}
async function getNowData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/now`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export default async function Page() {
  const lichess = await getChessData();
  const book = await getBookData();
  const career = await getCareerData();
  const location = await getLocationData();
  const now = await getNowData();

  return (
    <FadeInComponent>
      <HeroText
        heading="What I'm up to Now"
        desc={now[0].desc}
        now={now[0].date}
      />
      {/* TODO 3: Fade in content a little later to cater to information jumping */}
      <ContentDiv>
        <GeneralCard heading="Age">
          <Age />
        </GeneralCard>
        <GeneralCard heading="Location">
          <CardData nowData={`${location[0].city}, ${location[0].country}`} />
        </GeneralCard>
        <GeneralCard heading="Career">
          <CardData nowData={`${career[0].role} at ${career[0].company}`} />
        </GeneralCard>
        <GeneralCard heading="Reading">
          <CardData nowData={`${book[0].title} by ${book[0].author}`} />
        </GeneralCard>
        <GeneralCard heading="LiChess Rating">
          <CardData nowData={`Rapid: ${lichess.perfs.rapid.rating}`} />
          <p className="mt-2 md:mt-6">
            Live from{" "}
            <a href={lichess.url} className="underline" target="_blank">
              LiChess
            </a>{" "}
          </p>
        </GeneralCard>
      </ContentDiv>
    </FadeInComponent>
  );
}
