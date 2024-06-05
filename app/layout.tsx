import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Derek Temple",
  description: "The personal portfolio and blog of Derek Temple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
