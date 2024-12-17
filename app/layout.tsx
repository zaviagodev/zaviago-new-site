import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header";

const graphikth = localFont({
  src: [
    {
      path:'../public/fonts/graphikTH/graphikth-regular.woff2',
      weight:'400',
      style:'normal'
    },
    {
      path:'../public/fonts/graphikTH/graphikth-medium.woff2',
      weight:'500',
      style:'normal'
    },
    {
      path:'../public/fonts/graphikTH/GraphikThai-Semibold-Web.woff2',
      weight:'600',
      style:'normal'
    }
  ],
  variable: '--font-graphik'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${graphikth.variable} antialiased`}
      >
        {/* <Header /> */}
        <main className="py-20 px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
