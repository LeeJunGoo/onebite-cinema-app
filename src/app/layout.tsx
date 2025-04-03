import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <p>Global Layout</p>
        {children}
      </body>
    </html>
  );
}
