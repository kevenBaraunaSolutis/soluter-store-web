import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluter Store",
  description: "Loja de produtos digitais da Solutis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
