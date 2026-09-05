import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HexCoded | AI Creative Studio — Storyboard & Workflow Canvas",
  description: "Unified AI creative studio for agencies, filmmakers, and digital content teams.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%23000000%22/><text x=%2250%22 y=%2272%22 font-size=%2265%22 font-family=%22system-ui, -apple-system, sans-serif%22 font-weight=%22900%22 fill=%22%2310B981%22 text-anchor=%22middle%22>H</text></svg>",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex h-full min-h-full flex-col">{children}</body>
    </html>
  );
}
