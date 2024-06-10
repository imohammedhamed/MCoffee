import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/nav";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MCoffee",
  description:
    "We've 10 years' experience of crafting the finest quality coffee. From revolutionary methods and commitment to quality to unforgettable successes that have made Costa Coffee the Nation's Favourite coffee shop, our story is as unique as our coffee ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
