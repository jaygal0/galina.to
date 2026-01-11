import { ReactNode } from "react";

export default function GeneralCard({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <h2 className="">{heading}</h2>
      {children}
    </div>
  );
}
