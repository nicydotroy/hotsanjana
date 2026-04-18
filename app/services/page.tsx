import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services | Incall, Outcall, VIP & More | Hot Sanjana Mumbai',
  description:
    'Explore all escort services offered by Hot Sanjana: incall, outcall, VIP escorts, overnight, GFE, and 24/7 availability across all Mumbai locations.',
  alternates: { canonical: 'https://hotsanjana.in/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="Our Services"
        title="Premium Escort Services in Mumbai"
        subtitle="Tailored to Your Preferences"
        description="Whether you're looking for a quick companionship or an extended overnight experience, Hot Sanjana offers a comprehensive range of premium services designed to exceed your expectations."
        ctaText="Book Now"
        ctaHref="/contact"
        showStats={false}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              A comprehensive range of professional escort services, all available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-7 border border-pink-100 hover:border-pink-300 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-5">
                  {service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-pink-500">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing section ── */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            No hidden fees. No surprises. Contact us for a custom quote based on your requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                plan: 'Standard',
                duration: '1 Hour',
                includes: ['Verified escort', 'Incall or outcall', 'Full discretion'],
                cta: 'Inquire Now',
              },
              {
                plan: 'Premium',
                duration: '3 Hours',
                includes: ['Premium profile', 'Hotel delivery', 'Extended time'],
                cta: 'Book Premium',
                highlight: true,
              },
              {
                plan: 'VIP Overnight',
                duration: '12 Hours',
                includes: ['VIP companion', 'All night', 'GFE experience'],
                cta: 'Book VIP',
              },
            ].map((pkg) => (
              <div
                key={pkg.plan}
                className={`rounded-2xl p-6 border ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-pink-500 to-rose-400 border-pink-400 text-white shadow-pink-lg scale-105'
                    : 'bg-white border-pink-100'
                }`}
              >
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.plan}
                </h3>
                <p className={`text-2xl font-bold mb-4 ${pkg.highlight ? 'text-pink-100' : 'text-pink-600'}`}>
                  {pkg.duration}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className={`text-sm ${pkg.highlight ? 'text-pink-100' : 'text-gray-600'}`}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center py-2.5 rounded-full font-semibold text-sm transition-all ${
                    pkg.highlight
                      ? 'bg-white text-pink-600 hover:bg-pink-50'
                      : 'bg-gradient-to-r from-pink-500 to-rose-400 text-white hover:shadow-pink'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8">
            * Contact us for exact pricing. Rates vary based on location, escort type, and duration.
          </p>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
