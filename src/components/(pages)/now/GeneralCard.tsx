export default function GeneralCard({
  heading,
  children,
}: {
  heading: string;
  children: any;
}) {
  return (
    <div className="flex w-full flex-col rounded-3xl border-[2px] border-black p-20">
      <h2 className="font-sans text-2xl">{heading}</h2>
      {children}
    </div>
  );
}
