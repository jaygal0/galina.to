import { ReactNode } from "react";

export default function GeneralCard({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col rounded-3xl border-[2px] border-black p-4 md:p-12 lg:p-20">
      <h2 className="font-sans text-lg md:text-2xl">{heading}</h2>
      {children}
    </div>
  );
}
