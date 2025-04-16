import Header from '@/components/layout/Header';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="bg-black">
          <div className="container mx-auto px-10 max-w-[800px] min-h-screen">
            <Header />
            {children}
            <Footer />
            {modal}
          </div>
        </div>
        <div id="modal-root"></div>
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
