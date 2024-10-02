import FadeInComponent from "@/components/global/FadeIn";
import HeroText from "@/components/global/HeroText";

export default async function Page() {
  return (
    <FadeInComponent>
      {/* TODO 1: Sort out face home page */}
      {/* TODO 1: Style home page*/}
      <HeroText
        heading="Home"
        desc="This is where my face goes. Maybe even add links to LinkedIn and GitHub"
      />
    </FadeInComponent>
  );
}
