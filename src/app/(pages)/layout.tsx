import "@/app/globals.css";
import Link from "next/link";
import NavigationMenu from "@/components/global/NavigationMenu";
import { DM_Sans, Krona_One } from "next/font/google"; // Import DM Sans

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can choose the specific weights
  style: ["normal", "italic"], // Optionally, add styles (italic)
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${kronaOne.className} relative`}>
        <NavigationMenu />
        <main>
          <div className="mx-auto max-w-screen-lg">{children}</div>
        </main>
      </body>
    </html>
  );
}
