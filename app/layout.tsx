import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const hack = localFont({
  src: [
    {
      path: "../public/fonts/Hack-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Hack-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Hack-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Hack-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-hack",
});

export const metadata: Metadata = {
  title: "String.log",
  description: "String.log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hack.variable}`}>
        <Header />
        <main className="relative w-full min-h-screen">{children}</main>
        {/* TODO: footer 추가 */}
      </body>
    </html>
  );
}
