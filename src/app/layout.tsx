import Header from '@/components/layout/Header';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="container mx-auto px-10 bg-black max-w-[800px] min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
