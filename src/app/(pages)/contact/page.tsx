import FadeInComponent from "@/components/global/FadeIn";
import HeroText from "@/components/global/HeroText";
import React from "react";

export default function Page() {
  // TODO 2: Style contact page
  return (
    <FadeInComponent>
      <HeroText
        heading="Contact"
        desc="Whether you have a business inquiry or just a random question, I regularly check my emails and try to reply at a resonable time. You can get in touch at joshua[at]galina.to"
      />
    </FadeInComponent>
  );
}
