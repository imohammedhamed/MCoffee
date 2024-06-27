import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Footer from "./components/footer";
import Navbar from "./components/nav";
import { cn } from "@/lib/utils";

=======
import { cn } from "@/lib/utils";
import { Toaster } from 'react-hot-toast'
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MCoffee",
  description:
    `We've 10 years' experience of crafting the finest quality coffee. 
    From revolutionary methods and commitment to quality to unforgettable successes
    that have made Costa Coffee the Nation's Favourite coffee shop, our story is as unique as our coffee `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={cn("bg-lightBlue2 h-full font-sans", openSans.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>

          <Footer />
        </main>
=======
      <body className={cn(' bg-Blue50 h-full font-sans',openSans.className)}>
      <Toaster position="top-center" />
        {children}
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
      </body>
    </html>
  );
}
