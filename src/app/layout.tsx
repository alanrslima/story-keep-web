import type { Metadata } from "next";
import { Poppins, Montserrat, Satisfy } from "next/font/google";
import "./globals.css";
// import { useEffect } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Storykeep",
  description: "Colecionando memórias coletivas",
  icons: [{ rel: "manifest", url: "manifest.json" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then(() => console.log("Service Worker registered"))
  //       .catch((err) =>
  //         console.log("Service Worker registration failed:", err)
  //       );
  //   }
  // }, []);

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
