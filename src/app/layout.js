import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./clientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-x-hidden bg-[#050816] text-white antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}