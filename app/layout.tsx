import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { SITE_CONFIG } from '@/data/services'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsanjana.in'),
  title: {
    default: `${SITE_CONFIG.name} | Premium Escorts in Mumbai | 24/7 Available`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Hot Sanjana offers premium verified escorts and call girls in Mumbai, Navi Mumbai, Thane and nearby areas. Discreet, professional & available 24/7. Call +91-9038976363',
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hotsanjana.in',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Premium Escorts in Mumbai`,
    description:
      'Premium verified escorts in Mumbai available 24/7. Discreet, professional, and reliable escort services across all Mumbai locations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: `${SITE_CONFIG.name} – Mumbai Escort Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Premium Escorts in Mumbai`,
    description:
      'Premium verified escorts in Mumbai available 24/7. Discreet, professional, and reliable escort services across all Mumbai locations.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://hotsanjana.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        {/* Adult content disclaimer banner */}
        <div className="bg-gray-900 text-yellow-300 text-center text-xs py-2 px-4 font-medium">
          ⚠️ This site contains adult content. By continuing you confirm you are 18+ years of age.
        </div>

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
