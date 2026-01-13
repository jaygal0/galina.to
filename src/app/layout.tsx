import "@/app/globals.css";
import { BreakpointIndicator } from "@/components/global/BreakpointIndicator";
import { DM_Sans, Krona_One, Share_Tech_Mono } from "next/font/google";
import { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/global/Footer";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import Face from "@/components/(pages)/index/Face";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  weight: "400",
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  variable: "--font-krona-one",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galina.to"),
  title: "Joshua Galinato | Designer, Developer & Indie Maker",
  description:
    "My little corner of the internet where I get to experiment and try things out.",
  keywords: "blog, thoughts, ideas, galinato, joshua, joshua galinato",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joshua Galinato | Designer, Developer & Indie Maker",
    description:
      "My little corner of the internet where I get to experiment and try things out.",
    siteName: "Galina.to",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joshua Galinato",
      },
    ],
    locale: "en",
  },
  // Add other global metadata properties as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <PlausibleProvider domain="galina.to" />
      </head>
      <body
        className={`${kronaOne.variable} ${dmSans.variable} ${shareTechMono.variable} relative`}
      >
        <BreakpointIndicator />
        <main className="max-w-screen-3xl mx-auto p-5 pb-40 text-xl md:p-12">
          <Face />
          <Breadcrumbs />
          <div className="md:w-3/4 lg:w-1/2 xl:w-5/12">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
