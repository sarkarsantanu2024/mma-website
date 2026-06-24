import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Mind Mantra Abacus - Leading Abacus & Mental Math Training for Children",
    template: "%s | Mind Mantra Abacus",
  },
  description:
    "Transform your child's learning with Mind Mantra Abacus. Expert mental math training, brain development programs, and proven results across 100+ centres in India.",
  keywords: [
    "abacus training",
    "mental math",
    "brain development",
    "children education",
    "vedic math",
    "cognitive skills",
    "memory improvement",
  ],
  authors: [{ name: "Mind Mantra Abacus" }],
  creator: "Mind Mantra Abacus",
  publisher: "Mind Mantra Abacus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mindmantraabacus.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindmantraabacus.com",
    title: "Mind Mantra Abacus - Leading Abacus Training",
    description:
      "Transform your child's learning with expert abacus training and brain development programs.",
    siteName: "Mind Mantra Abacus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Mantra Abacus",
    description:
      "Expert abacus training and brain development programs for children.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
