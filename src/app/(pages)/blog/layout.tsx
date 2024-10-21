import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-bg-blog pb-96">
      <div className="mx-auto max-w-screen-lg">{children}</div>
    </div>
  );
}
