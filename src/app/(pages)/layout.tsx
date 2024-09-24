import Navigation from "../../../components/global/Navigation";
import "@/app/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <main className="">
          <Navigation />
          <div className="mx-auto max-w-screen-md">{children}</div>
        </main>
      </body>
    </html>
  );
}
