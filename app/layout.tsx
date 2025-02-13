import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/contexts/AppContext";
import type React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import Providers from "@/components/providers/session-provider";


export const metadata: Metadata = {
  title: "Fynar AI",
  description: "AI-powered VC-Startup CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`inter.className antialiased`}>
        <Providers>

           <Navbar />
            {children}
          <Toaster />  
        </Providers>
      </body>
    </html>
  );
}
