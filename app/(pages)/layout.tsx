import Footer from "@/app/components/footer";
import Navbar from "@/app/components/nav";
import { Toaster } from 'react-hot-toast';
import BreadcrumbDemo from "../components/Breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className=" flex flex-col min-h-screen">
        <Navbar />
        <BreadcrumbDemo/>
        <Toaster position="top-center"/>
        <div className=" flex-grow flex-1">
        {children}
        </div>
        <Footer />
        </main>
  );
}