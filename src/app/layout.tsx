import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Youssef Arrassen Portfolio",
  description: "designed by 97% Human, 3% Machine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="font-sans font-normal bg-white" >{children}</body>
    </html>
  );
}
