"use client";

import "@/app/globals.css";
import NavigationMenu from "@/components/global/NavigationMenu";
import { DM_Sans, Krona_One, Share_Tech_Mono } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname

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
  const pathname = usePathname(); // Initialize usePathname to get the current path

  // Define different background colors for different routes
  const backgroundColor = (() => {
    if (pathname === "/home") {
      return "bg-bg-home";
    } else if (pathname === "/projects") {
      return "bg-bg-projects";
    } else if (pathname === "/now") {
      return "bg-bg-now";
    } else if (pathname === "/timeline") {
      return "bg-bg-timeline";
    } else if (pathname === "/blog") {
      return "bg-bg-blog";
    } else {
      return "bg-white";
    }
  })();

  return (
    <html lang="en">
      <head></head>
      <body
        className={`${kronaOne.className} ${shareTechMono.className} relative ${backgroundColor}`} // Apply dynamic background class here
      >
        <NavigationMenu />
        <main>
          <div className="mx-auto max-w-screen-lg">{children}</div>
        </main>
      </body>
    </html>
  );
}
