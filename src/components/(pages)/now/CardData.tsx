interface T {
  nowData: string;
}
export default function CardData({ nowData }: T) {
  return <p className="">{nowData}</p>;
}
