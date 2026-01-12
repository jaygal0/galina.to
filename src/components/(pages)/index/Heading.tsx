interface Props {
  heading: string;
  oneLiner: string;
}
export default function Heading({ heading, oneLiner }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{heading}</h1>
      <h2 className="text-2xl font-light text-muted-foreground">{oneLiner}</h2>
    </div>
  );
}
