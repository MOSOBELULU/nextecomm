"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import TopNav from "@/components/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
      <body>
        <TopNav/>
        <Toaster/>
        {children}
      </body>
      </SessionProvider>
    </html>
  );
}
