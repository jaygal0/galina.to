import books from "../../../../data/now/books";

export async function GET(req: Request) {
  const data = await books;
  return Response.json(data);
}
