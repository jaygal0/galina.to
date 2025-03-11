import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-bg-now">
      <div className="mx-auto min-h-screen max-w-screen-lg pb-8">
        {children}
      </div>
    </div>
  );
}
