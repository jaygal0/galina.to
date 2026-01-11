interface Props {
  heading: string;
  oneLiner: string;
}
export default function Heading({ heading, oneLiner }: Props) {
  return (
    <div>
      <h1 className="mt-32 font-bold">{heading}</h1>
      <h2 className="font-light text-muted-foreground">{oneLiner}</h2>
    </div>
  );
}
