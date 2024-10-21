import Face from "@/components/(pages)/index/Face";
import Heading from "@/components/(pages)/index/Heading";
import FadeInComponent from "@/components/global/FadeIn";

export default async function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center -space-x-8 md:flex-row">
      <FadeInComponent>
        <Heading />
      </FadeInComponent>
      <Face />
    </div>
  );
}
