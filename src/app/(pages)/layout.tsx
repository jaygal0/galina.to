import "@/app/globals.css";
import NavigationMenu from "@/components/global/NavigationMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative">
        <NavigationMenu />
        <main>
          <div className="mx-auto max-w-screen-lg py-80">{children}</div>
        </main>
      </body>
    </html>
  );
}
