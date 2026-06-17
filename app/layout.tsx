

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTM GrowthBoard",
  description:
    "AI-powered Business Operating System for the CTM Cashflow Tribe Machine.",
  applicationName: "CTM GrowthBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

