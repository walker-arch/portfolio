import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sandeep Kumar Gupta | AI Developer & Analyst",
  description:
    "Portfolio of Sandeep Kumar Gupta - AI Developer and Analyst specializing in Python, Machine Learning, and Data Analysis. Building intelligent solutions with modern technologies.",
  keywords: [
    "Sandeep Kumar Gupta",
    "AI Developer",
    "Python Developer",
    "Machine Learning",
    "Data Analyst",
    "Web Development",
    "Generative AI",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: "Sandeep Kumar Gupta" }],
  creator: "Sandeep Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandeepgupta.dev",
    title: "Sandeep Kumar Gupta | AI Developer & Analyst",
    description:
      "Portfolio of Sandeep Kumar Gupta - AI Developer specializing in Python, Machine Learning, and Data Analysis.",
    siteName: "Sandeep Kumar Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Kumar Gupta | AI Developer & Analyst",
    description:
      "Portfolio of Sandeep Kumar Gupta - AI Developer specializing in Python, Machine Learning, and Data Analysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
