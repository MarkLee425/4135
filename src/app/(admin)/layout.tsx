import React from "react";
import "../globals.css";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Sidebar from "@/components/(admin)/sidebar/Sidebar";
import Navbar from "@/components/(admin)/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inspectron",
  description: "Get started in Inspectron"
};

export default async function AccessLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  /* const session = await getServerSession(authOptions); */
  return (
    <html lang="en">
      <body>
        {/* <SessionProvider session={session}>
          {!session ? (
            redirect("/")
          ) : (
            <section>
              <nav>asdfnkndaskfdas</nav>
  
              {children}
            </section>
          )}
        </SessionProvider> */}
        <div className="flex">
          <Sidebar />
          <Navbar />
          <div className="mt-28 ml-12">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
