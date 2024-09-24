import "@/app/globals.css"
import Link from "next/link";

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
        <main className="relative w-full h-screen">
          <Link href="/" className="absolute top-5 left-5">Logo</Link>
          <Link href="/" className="absolute top-5 right-4">Menu</Link>
          <Link href="/now" className="absolute bottom-5 left-5">Now</Link>
          <Link href="/projects" className="absolute bottom-5 right-5">Projects</Link>
          <div className="mx-auto max-w-screen-md py-96">{children}</div>
        </main>
      </body>
    </html>
  );
}
