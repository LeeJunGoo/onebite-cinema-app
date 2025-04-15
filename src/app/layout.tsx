import Header from '@/components/layout/Header';
import './globals.css';
import { Toaster } from 'react-hot-toast';

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
        <Toaster
          position="top-left"
          reverseOrder={true}
          toastOptions={{
            style: {
              fontSize: '0.875rem',
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
