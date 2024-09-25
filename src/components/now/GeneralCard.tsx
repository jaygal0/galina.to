export default function GeneralCard({
  heading,
  children,
}: {
  heading: string;
  children: any;
}) {
  return (
    <div className="flex flex-col p-20 border rounded-3xl w-full">
      <h2 className="font-bold text-xl">{heading}</h2>
      {children}
    </div>
  );
}
