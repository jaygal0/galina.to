import "@/app/globals.css";
import { BreakpointIndicator } from "@/components/global/BreakpointIndicator";
import NavigationMenu from "@/components/global/NavigationMenu";
import { DM_Sans, Krona_One, Share_Tech_Mono } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Joshua Galinato | Creative Designer & Problem-Solving Tinkerer",
  description:
    "Discover the inventive world of Joshua Galinato, a creative designer and passionate tinkerer specializing in design and problem-solving. Explore projects, ideas, and more at https://galina.to.",
  keywords: "blog, thoughts, ideas, galinato, joshua, joshua galinato",
  icons: {
    icon: "/favicon.ico",
  },
  // Add other global metadata properties as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kronaOne.className} ${dmSans.className} ${shareTechMono.className} relative`}
      >
        <BreakpointIndicator />
        <NavigationMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
