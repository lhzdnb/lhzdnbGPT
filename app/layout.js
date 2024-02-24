import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lhzdnbGPT",
  description:
    "A Next.js project showcasing cutting-edge web development techniques and innovative features.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="winter">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
