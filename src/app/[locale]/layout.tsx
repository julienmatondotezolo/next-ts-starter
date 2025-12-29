import "../../assets/styles/globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import React from "react";

import Providers from "./providers";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADA - Point of sale",
  description: "Adaptive Point of sale system working on multiple devices",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <body className={`${dmSans.className}`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
