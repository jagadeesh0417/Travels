import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BDL Travels | Premium Travel Experiences',
  description:
    'Discover premium travel experiences with BDL Travels. Luxury bus booking, cab services, tour packages, and corporate travel across Hyderabad, Tirupati, Bangalore, and Goa.',
  keywords: [
    'travel', 'bus booking', 'cab booking', 'tour packages', 'Hyderabad',
    'Tirupati', 'Bangalore', 'Goa', 'corporate travel', 'luxury travel',
  ],
  openGraph: {
    title: 'BDL Travels | Premium Travel Experiences',
    description: 'Discover premium travel experiences with comfort, trust and unforgettable journeys.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'BDL Travels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDL Travels | Premium Travel Experiences',
    description: 'Discover premium travel experiences with comfort, trust and unforgettable journeys.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bdl-travels.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-primary text-text">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
