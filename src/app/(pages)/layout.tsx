import "@/app/globals.css";
import Link from "next/link";
import NavigationMenu from "@/components/global/NavigationMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main className="relative h-screen w-full">
          <NavigationMenu />
          <Link href="/" className="fixed left-5 top-5">
            Logo
          </Link>
          <button className="fixed right-4 top-5">Menu</button>
          <Link href="/now" className="fixed bottom-5 left-5">
            Now
          </Link>
          <Link href="/projects" className="fixed bottom-5 right-5">
            Projects
          </Link>
          <div className="mx-auto max-w-screen-lg py-80">{children}</div>
        </main>
      </body>
    </html>
  );
}
