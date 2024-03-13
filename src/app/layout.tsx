import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opcode",
  description: "Opcode Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium`}>
      <div className="flex flex-col min-h-screen mx-auto pt-8 ">
          <div className="">
            <Header />
            <main className="my-0 py-16">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
