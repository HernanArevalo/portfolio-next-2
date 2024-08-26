import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Confetti, Language, Likes, Navbar } from "@/components";
const font = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Hernán Arévalo | Frontend Dev",
  description: "Hello! I'm a frontend developer and a student of Information Sistems Engineering. I'm developing on the frontend with Next and React. In the backend I usually use Node or PostgreSQL, depending the situation. If you want to know more about me, you can send me an email to hernanarevalo16@gmail.com. I'm excited to hear about your project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={font.className}>

      <body className='bg-negro text-blanco relative min-h-screen max-w-full'>
        <Navbar />
        <Confetti />

          {children}
      </body>
    </html>
  );
}
