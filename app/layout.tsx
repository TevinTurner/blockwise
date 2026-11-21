import type { Metadata } from "next";
import { Baloo_2, JetBrains_Mono, Nunito } from "next/font/google";
import "./globals.css";

const displayFont = Baloo_2({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Nunito({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const codeFont = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Blockwise",
  description: "Applied AI, block by block.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${codeFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
