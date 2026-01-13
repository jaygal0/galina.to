interface TimeProp {
  time: string;
}

export default function Time({ time }: TimeProp) {
  return (
    <div className="text-xs capitalize text-muted-foreground sm:text-sm">
      {time}
    </div>
  );
}
