interface T {
  nowData: string;
}
export default function CardData({ nowData }: T) {
  return <p className="text-lg font-bold md:text-4xl">{nowData}</p>;
}
