import { ReactNode } from "react";

interface ContentDivProps {
  children: ReactNode;
}
export default function ContentDiv({ children }: ContentDivProps) {
  return (
    <div className="my-12 mb-32 flex flex-col gap-8 font-sans">{children}</div>
  );
}
