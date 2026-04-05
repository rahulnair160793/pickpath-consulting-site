import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {

  title: "PickPath Consulting | Warehouse Consulting for Small Businesses in Sydney",
  description:
    "PickPath Consulting helps small and growing businesses improve warehouse operations through practical support across receiving, putaway, picking, packing, bin location setup, barcode workflows, stocktake processes, and warehouse SOP design in Sydney.",
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
