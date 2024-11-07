import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import { Noto_Sans_Bengali } from "next/font/google";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Anaa Developers Ltd",
  description: "Anaa Developers Limited is a prominent real estate company specializing in the sale of land shares across various projects. Our mission is to offer high-quality...",
};

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} ${notoSansBengali.className}`}>
          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>
    </html>
  );
}
