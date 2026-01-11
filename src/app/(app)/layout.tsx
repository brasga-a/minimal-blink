import Header from "@/components/layout/header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Header/>
      <main>
        {children}
      </main>
    </div>
  );
}