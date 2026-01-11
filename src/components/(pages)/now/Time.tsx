interface TimeProp {
  time: string;
}

export default function Time({ time }: TimeProp) {
  return <div className="text-sm capitalize text-muted-foreground">{time}</div>;
}
