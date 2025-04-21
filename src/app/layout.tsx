import ToastContainer from '@/components/common/ToastContainer';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ReactNode } from 'react';
import './globals.css';

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
        <ToastContainer />
      </body>
    </html>
  );
}
