import BreadcrumbDemo from "../../components/Breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <BreadcrumbDemo/>
        {children}
    </div>
  );
}