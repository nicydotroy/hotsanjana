import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import { services } from '@/data/services'

const servicesFaqs = [
  {
    question: 'What escort services does Hot Sanjana offer?',
    answer: 'Hot Sanjana offers a comprehensive range of escort services including incall, outcall, overnight companionship, GFE (Girlfriend Experience), VIP escort services, hotel delivery, event companionship, and travel escort services. All services are available 24/7 across Mumbai.',
  },
  {
    question: 'What is the difference between incall and outcall services?',
    answer: 'Incall means you visit the escort at a pre-arranged location. Outcall means the escort comes to you – your home, hotel, or any preferred location in Mumbai. Both options are available with Hot Sanjana and can be arranged based on your preference.',
  },
  {
    question: 'Is overnight escort service available?',
    answer: 'Yes. We offer overnight bookings where your companion stays with you for the full night. This is one of our most popular premium services and is available with our VIP and select premium profiles across all Mumbai locations.',
  },
  {
    question: 'What is the GFE (Girlfriend Experience)?',
    answer: 'The Girlfriend Experience (GFE) is a premium companionship service where the escort acts as your girlfriend for the duration of the booking – engaging in natural conversation, affection, dining together, and creating a genuine connection. Our GFE specialists are highly experienced and provide an authentic, memorable experience.',
  },
  {
    question: 'Can I book escorts for outstation and travel?',
    answer: 'Absolutely. We arrange travel companionship for outstation trips, business travel, and vacations. Travel bookings require advance notice, and expenses like transport and accommodation are discussed at the time of booking. Our VIP companions are experienced in discreet travel.',
  },
  {
    question: 'How quickly can you arrange a service booking?',
    answer: 'Most bookings are confirmed within 30–60 minutes of first contact. For urgent same-day bookings, calling us directly ensures the fastest response. We maintain a ready roster of companions available at short notice across all major Mumbai locations.',
  },
  {
    question: 'Are escort services available 24 hours a day?',
    answer: 'Yes. Hot Sanjana operates 24/7, 365 days a year. Whether you need companionship at noon or midnight, on a weekday or public holiday, our booking team and escorts are always available to accommodate your schedule.',
  },
  {
    question: 'What areas of Mumbai do your services cover?',
    answer: 'We cover all of Mumbai including South Mumbai, Andheri, Bandra, Juhu, Borivali, Malad, Thane, Navi Mumbai, Panvel, Vasai, Virar, Kalyan, and 90+ more locations. We also arrange services in Pune and other nearby cities.',
  },
  {
    question: 'How is pricing determined for escort services?',
    answer: 'Pricing depends on the escort profile, service type (incall/outcall/overnight), duration, and location. We maintain transparent pricing with no hidden charges. Contact us directly for a custom quote based on your specific requirements.',
  },
  {
    question: 'Is advance booking required or can I book on short notice?',
    answer: 'Both options are available. We accommodate advance bookings as well as last-minute requests. For popular profiles and peak hours, advance booking is recommended. For spontaneous bookings, call us and we will arrange the best available companion quickly.',
  },
  {
    question: 'Can escorts be delivered to my hotel room?',
    answer: 'Yes. Hotel room delivery is one of our most commonly requested services. Our escorts are familiar with all major hotels in Mumbai and can arrive discreetly at your room. They are professional, well-presented, and experienced in hotel bookings.',
  },
  {
    question: 'What is the minimum booking duration for escort services?',
    answer: 'The minimum booking duration is typically one hour. This applies to both incall and outcall services. Longer bookings of 2–3 hours, half-day, full-day, and overnight are all available and offer better value for your experience.',
  },
  {
    question: 'Can I request a specific escort type or category?',
    answer: 'Yes. We offer multiple escort categories including VIP, Russian, Bengali, Punjabi, North Indian, housewife, college, GFE, and more. Tell us your preferences and we will match you with the most suitable available companion from our verified roster.',
  },
  {
    question: 'Are your escort services safe and discreet?',
    answer: 'Safety and discretion are our highest priorities. All escorts are verified and health-screened. Client information is never shared or recorded beyond what is necessary for the booking. All services are conducted with complete professionalism and confidentiality.',
  },
  {
    question: 'Do you provide group or party escort bookings?',
    answer: 'Yes. We can arrange multiple companions for group bookings, bachelor parties, corporate events, and private gatherings. Group bookings require advance notice. Contact us with the number of companions required and the occasion for a customised arrangement.',
  },
  {
    question: 'What should I do if I am not satisfied with the service?',
    answer: 'Client satisfaction is our top priority. If for any reason you are not completely satisfied, contact us immediately and we will do everything in our power to resolve the issue. We maintain a strict quality standard and take all client feedback seriously.',
  },
]

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

      <FAQSection faqs={servicesFaqs} title="Escort Services – Frequently Asked Questions" subtitle="Everything you need to know about booking with Hot Sanjana" />

      <BookingCTA />
    </>
  )
}
