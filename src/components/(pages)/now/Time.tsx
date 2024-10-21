interface TimeProp {
  time: string;
}

export default function Time({ time }: TimeProp) {
  return <div className="text-xs capitalize md:text-2xl">{time}</div>;
}
