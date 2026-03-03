import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiClaw - Open Source Agent Team System",
  description:
    "Let multiple AI Agents collaborate in Matrix rooms, fully visible to humans, with real-time intervention capability. 让多个 AI Agent 在 Matrix 房间中协作，人类全程可见、随时可介入。",
  keywords: [
    "Agent",
    "AI",
    "Matrix",
    "Multi-Agent",
    "Open Source",
    "Collaboration",
  ],
  openGraph: {
    title: "HiClaw - Open Source Agent Team System",
    description:
      "Let multiple AI Agents collaborate in Matrix rooms. 让多个 AI Agent 在 Matrix 房间中协作。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
