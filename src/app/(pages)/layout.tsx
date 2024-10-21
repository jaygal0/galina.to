import "@/app/globals.css";
import NavigationMenu from "@/components/global/NavigationMenu";
import { DM_Sans, Krona_One, Share_Tech_Mono } from "next/font/google";

// TODO 2: Figure out why the fonts aren't working. Do I need to have "use client" here?

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
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
      <body
        className={`${kronaOne.className} ${dmSans.className} ${shareTechMono.className} relative`}
      >
        <NavigationMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
