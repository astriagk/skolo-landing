import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skolo — Real-Time School Bus Tracking for Parents | Bangalore",
  description:
    "Track your child's school bus in real-time. Live GPS tracking powered by TomTom, smart notifications, and OTP-based pickup verification. Built for Indian families.",
  keywords: [
    "school bus tracking",
    "child safety tracking app",
    "school commute tracking India",
    "GPS school bus Bangalore",
    "student bus tracking",
    "OTP pickup verification",
    "school transport management",
    "real-time bus tracking app",
  ],
  authors: [{ name: "Skolo" }],
  openGraph: {
    title: "Skolo — Know Your Child Is Safe. Every Trip.",
    description:
      "Real-time school bus tracking with GPS, smart notifications, and OTP security. Register today.",
    type: "website",
    locale: "en_IN",
    siteName: "Skolo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skolo — Real-Time School Bus Tracking",
    description:
      "Track your child's school bus in real-time. GPS tracking, smart alerts, OTP verification. A product by Astria GK.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Skolo",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Android, iOS, Web",
              description:
                "Real-time school bus tracking app with GPS, smart notifications, and OTP-based pickup verification for child safety.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                description: "Register your interest",
              },
              author: {
                "@type": "Organization",
                name: "Skolo",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
