import type { Metadata } from 'next'
import Image from 'next/image'
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

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What We{' '}
              <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A comprehensive range of professional escort services, all available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group rounded-2xl overflow-hidden border border-red-900/30 hover:border-red-700/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
              >
                {/* Service Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl" style={{ background: '#1f0800' }}>
                      {service.icon}
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-3xl">{service.icon}</div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-5">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-red-500">•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing section ── */}
      <section className="py-16" style={{ background: '#0d0000' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
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
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  pkg.highlight
                    ? 'border-red-500/50 scale-105'
                    : 'border-red-900/30'
                }`}
                style={{
                  background: pkg.highlight
                    ? 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)'
                    : 'linear-gradient(135deg, #140500, #1f0a00)',
                  boxShadow: pkg.highlight ? '0 0 40px rgba(220,0,0,0.4)' : 'none',
                }}
              >
                <h3 className="text-xl font-bold text-white mb-1">{pkg.plan}</h3>
                <p className={`text-2xl font-bold mb-4 ${pkg.highlight ? 'text-yellow-300' : 'gold-text'}`}>
                  {pkg.duration}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className={`text-sm ${pkg.highlight ? 'text-red-100' : 'text-gray-400'}`}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center py-2.5 rounded-full font-semibold text-sm transition-all ${
                    pkg.highlight
                      ? 'bg-black/30 text-white hover:bg-black/50'
                      : 'btn-primary'
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
