import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PickPath Consulting',
  description: 'Warehouse process consulting for growing businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
