import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import Navbar from "../../components/(public)/Navbar";
import Footer from "../../components/Footer";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inspectron",
  description: "Get started in Inspectron",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
