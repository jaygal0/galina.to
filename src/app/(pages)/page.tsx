import Face from "@/components/(pages)/index/Face";
import FadeInComponent from "@/components/global/FadeIn";
import HeroText from "@/components/global/HeroText";

export default async function Page() {
  return (
    <FadeInComponent>
      {/* TODO 1: Style home page*/}
      <Face />
    </FadeInComponent>
  );
}
