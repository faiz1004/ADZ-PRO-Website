import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingElements } from '@/components/layout/FloatingElements';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgressBar } from '@/components/ui/scroll-progress-bar';
import { CustomCursor } from '@/components/ui/custom-cursor';

export const metadata: Metadata = {
  title: 'Adz Pro | Leading Advertising Agency in New Delhi',
  description: 'Adz Pro is a premier digital marketing and advertising agency in Bijwasan, New Delhi. Expert solutions for scaling your brand through creative strategy and performance advertising.',
  keywords: ['Adz Pro New Delhi', 'Advertising Agency in Bijwasan', 'Digital Marketing Expert Adz Pro', 'Adz Pro Digital'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Adz Pro | Leading Advertising Agency in New Delhi',
    description: 'Creative precision meets data-driven growth.',
    url: 'https://adzpro.co.in',
    siteName: 'Adz Pro Digital',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adz Pro | Digital Marketing Expert',
    description: 'Transforming visions into digital reality.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adz Pro Digital",
    "image": "https://adzpro.co.in/logo.png",
    "@id": "",
    "url": "https://adzpro.co.in",
    "telephone": "+918278221944",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 29 B, Ambedkar Colony, Bijwasan",
      "addressLocality": "New Delhi",
      "postalCode": "110061",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5366,
      "longitude": 77.0628
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/people/Adz-Pro/61564387431825/",
      "https://www.linkedin.com/in/adzpro/",
      "https://www.instagram.com/adzpro.co.in"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingElements />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
