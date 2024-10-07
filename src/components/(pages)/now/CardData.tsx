interface T {
  nowData: string;
}
export default function CardData({ nowData }: T) {
  return <p className="text-4xl font-bold">{nowData}</p>;
}
