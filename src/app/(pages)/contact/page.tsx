import FadeInComponent from "@/components/global/FadeIn";
import HeroText from "@/components/global/HeroText";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galina.to | Contact",
  description: "Get in touch with me.",
};

export default function Page() {
  return (
    <FadeInComponent>
      <HeroText
        heading="Contact"
        desc="Whether you have a business inquiry or just a random question, I regularly check my emails and try to reply at a resonable time. You can get in touch at joshua@galina.to"
      />
    </FadeInComponent>
  );
}
