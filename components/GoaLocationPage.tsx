import type { Metadata } from 'next'
import Link from 'next/link'
import { GoaLocation } from '@/data/goa-locations'

interface GoaLocationPageProps {
  loc: GoaLocation
}

export function generateGoaLocationMetadata(loc: GoaLocation): Metadata {
  const title = `${loc.name} Escorts in Goa | Call Girls in ${loc.name} | Hot Sanjana`
  const description = loc.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://hotsanjana.in/escorts/${loc.slug}`,
    },
    alternates: {
      canonical: `https://hotsanjana.in/escorts/${loc.slug}`,
    },
  }
}

export default function GoaLocationPage({ loc }: GoaLocationPageProps) {
  const faqItems = [
    {
      q: `What is ${loc.name} known for in Goa?`,
      a: `${loc.name} is an important area of Goa with a unique character shaped by its location and community. The area features ${loc.landmarks.slice(0, 2).join(', ')} and serves as a key neighbourhood in Goa.`,
    },
    {
      q: `Are there verified escorts available in ${loc.name}?`,
      a: `Yes, our agency provides thoroughly verified, professional escorts with complete privacy and discretion in ${loc.name}. All profiles are authenticated and available 24/7.`,
    },
    {
      q: `What areas near ${loc.name} can escorts visit?`,
      a: `Our escorts in ${loc.name} are fully mobile and can visit nearby neighbourhoods including ${loc.nearbyAreas.slice(0, 3).join(', ')}. We serve the entire greater Goa area.`,
    },
    {
      q: `Is there guaranteed confidentiality with escorts in ${loc.name}?`,
      a: `Complete confidentiality and discretion are fundamental to our service. All client information remains strictly private, and our escorts are experienced in professional discretion.`,
    },
    {
      q: `What are the booking and payment terms for ${loc.name}?`,
      a: `We offer flexible booking options with transparent pricing. Payment can be made directly to the escort, and advance booking is recommended for guaranteed availability.`,
    },
    {
      q: `Can escorts in ${loc.name} provide companionship for events?`,
      a: `Yes, our escorts are experienced in providing professional companionship for events, dinners, and occasions in ${loc.name} and throughout Goa.`,
    },
    {
      q: `How do I book an escort in ${loc.name}?`,
      a: `Contact us with your requirements and preferred date/time. We will match you with verified escorts in ${loc.name} available for your preferred duration.`,
    },
    {
      q: `Are outcalls available from ${loc.name}?`,
      a: `Yes, our escorts in ${loc.name} provide both incall and outcall services throughout Goa with full professional discretion.`,
    },
    {
      q: `What makes Hot Sanjana the best escort service in ${loc.name}?`,
      a: `We are committed to providing the highest quality, most professional escort service in ${loc.name}. Every escort is thoroughly verified, and we maintain the strictest standards of confidentiality.`,
    },
    {
      q: `Can I meet an escort for a long-term arrangement in ${loc.name}?`,
      a: `Yes, we facilitate both short-term bookings and long-term arrangements with exclusive escorts in ${loc.name}. All arrangements are completely confidential.`,
    },
    {
      q: `Are there incall services available in ${loc.name}?`,
      a: `We offer professional incall and outcall services with verified escorts in comfortable, discreet locations throughout ${loc.name}.`,
    },
    {
      q: `What safety measures are in place for escorting in ${loc.name}?`,
      a: `Your safety and privacy are paramount. We verify all clients and maintain strict protocols to ensure professional, secure encounters for both clients and escorts in ${loc.name}.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">{loc.area} · Goa</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{loc.name} Escorts</h1>
          <p className="text-xl text-red-50 max-w-2xl">{loc.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Premium Escorts in {loc.name}, Goa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {loc.uniqueContent}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our verified escorts in {loc.name} provide the highest standards of professional companionship and discretion. Each escort is thoroughly vetted and available 24/7 for outcalls and incalls throughout {loc.name} and greater Goa.
              </p>
            </div>

            {/* Landmarks Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Landmarks & Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loc.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 mt-1">•</span>
                    <span className="text-gray-700">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nearby Areas We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {loc.nearbyAreas.map((area, idx) => (
                  <span key={idx} className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqItems.map((item, idx) => (
                  <details key={idx} className="group border-b border-gray-200 pb-6">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 hover:text-red-600">
                      {item.q}
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg shadow-lg p-8 mb-8 sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Book Now</h3>
              <p className="mb-6 text-red-50">
                Verified escorts available 24/7 in {loc.name}
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-red-600 font-bold py-3 rounded-lg hover:bg-red-50 transition">
                  Call Now
                </button>
                <button className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-400 transition">
                  WhatsApp
                </button>
              </div>
              <p className="text-xs text-red-100 mt-4 text-center">
                100% Confidential | Verified Profiles | 24/7 Available
              </p>
            </div>

            {/* Other Goa Locations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-gray-900">More Goa Locations</h4>
              <div className="space-y-2">
                <Link href="/escorts/calangute" className="block text-red-600 hover:text-red-700 font-medium">
                  Calangute
                </Link>
                <Link href="/escorts/anjuna" className="block text-red-600 hover:text-red-700 font-medium">
                  Anjuna
                </Link>
                <Link href="/escorts/panaji" className="block text-red-600 hover:text-red-700 font-medium">
                  Panaji
                </Link>
                <Link href="/escorts/colva" className="block text-red-600 hover:text-red-700 font-medium">
                  Colva
                </Link>
                <Link href="/escorts/canacona" className="block text-red-600 hover:text-red-700 font-medium">
                  Canacona
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Hot Sanjana - Escorts in ${loc.name}`,
            description: loc.description,
            address: {
              '@type': 'PostalAddress',
              addressLocality: loc.name,
              addressRegion: 'Goa, India',
              addressCountry: 'IN',
            },
            areaServed: ['Goa', 'India'],
            priceRange: '$$',
            telephone: '+91-9999999999',
            url: `https://hotsanjana.in/escorts/${loc.slug}`,
            image: 'https://hotsanjana.in/og-image.png',
          }),
        }}
      />
    </div>
  )
}
