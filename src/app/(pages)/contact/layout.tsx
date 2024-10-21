import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-bg-contact">
      <div className="mx-auto min-h-screen max-w-screen-lg">{children}</div>
    </div>
  );
}
