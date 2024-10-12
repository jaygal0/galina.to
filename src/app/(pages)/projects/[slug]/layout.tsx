import "@/app/globals.css";
import NavigationMenu from "@/components/global/NavigationMenu";
import { DM_Sans, Krona_One, Share_Tech_Mono } from "next/font/google"; // Import DM Sans

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can choose the specific weights
  style: ["normal", "italic"], // Optionally, add styles (italic)
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
        className={`${kronaOne.className} ${shareTechMono.className} relative`}
      >
        <NavigationMenu />
        <main>
          <div className="mx-auto flex min-h-screen max-w-screen-lg items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
