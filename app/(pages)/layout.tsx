import Footer from "@/app/components/footer";
import Navbar from "@/app/components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className=" flex flex-col min-h-screen">
        <Navbar />
        <div className=" flex-grow flex-1">
        {children}
        </div>
        <Footer />
        </main>
  );
}