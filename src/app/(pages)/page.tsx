import Face from "@/components/(pages)/index/Face";
import Heading from "@/components/(pages)/index/Heading";
import FadeInComponent from "@/components/global/FadeIn";

export default async function Page() {
  return (
    <div className="flex h-screen items-center justify-center -space-x-8">
      <FadeInComponent>
        <Heading />
      </FadeInComponent>
      <Face />
    </div>
  );
}
