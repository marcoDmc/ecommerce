import type { Metadata } from "next";
import "./globals.css";
import { Hind } from 'next/font/google'

const hind = Hind({
  weight:'400',
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={hind.className}>
        {children}
      </body>
    </html>
  );
}
