import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { SITE_CONFIG } from '@/data/services'

export const metadata: Metadata = {
  title: 'Contact Us | Hot Sanjana | +91-9038976363',
  description:
    'Contact Hot Sanjana for premium escort bookings in Mumbai. Call +91-9038976363 or WhatsApp +91-90389-76363. Available 24/7 across all Mumbai locations.',
  alternates: { canonical: 'https://hotsanjana.in/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        badge="Get In Touch"
        title="Contact Hot Sanjana"
        subtitle="Available 24 Hours, 7 Days a Week"
        description="Ready to book? Have questions? Our team is available around the clock to assist you. Reach out via phone, Telegram, or email."
        ctaText="Call Now"
        ctaHref={`tel:${SITE_CONFIG.phone}`}
        showStats={false}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                How to{' '}
                <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Reach Us
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                We respond within minutes. Choose whichever method is most convenient for you.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200 hover:border-pink-400 hover:shadow-card group transition-all duration-300 hover:-translate-y-0.5"
                  rel="nofollow"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-2xl shadow-pink flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call us directly</p>
                    <p className="text-xl font-bold text-pink-600 group-hover:text-pink-700">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Available 24/7 – immediate response</p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:border-blue-400 hover:shadow-lg group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Message on WhatsApp</p>
                    <p className="text-xl font-bold text-blue-600 group-hover:text-blue-700">
                      @{SITE_CONFIG.whatsappDisplay}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Fast, secure & private messaging</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-5 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-lg group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email us</p>
                    <p className="text-lg font-bold text-purple-600 group-hover:text-purple-700 break-all">
                      {SITE_CONFIG.email}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">For non-urgent inquiries</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Book</h3>
              <ol className="space-y-5">
                {[
                  {
                    step: '1',
                    title: 'Contact Us',
                    desc: 'Call or message on WhatsApp. We respond within 2 minutes.',
                  },
                  {
                    step: '2',
                    title: 'Choose Your Companion',
                    desc: 'Tell us your preferences – type, location, and duration. We\'ll suggest the best available options.',
                  },
                  {
                    step: '3',
                    title: 'Confirm Booking',
                    desc: 'Once you confirm, we arrange everything. Quick, easy, and 100% discreet.',
                  },
                  {
                    step: '4',
                    title: 'Enjoy Your Experience',
                    desc: 'Your escort arrives at the agreed time and place. All details remain confidential.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 p-4 bg-white/70 rounded-xl border border-pink-100">
                <p className="text-sm text-gray-600 text-center">
                  🔒 All bookings are completely confidential. Your information is never shared or stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 border-t border-red-900/20" style={{ background: '#0d0000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            We Serve All Areas in Mumbai &amp; Beyond
          </h3>
          <p className="text-gray-400 mb-6">
            From South Mumbai to the far suburbs – 90+ locations covered 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Andheri', 'Bandra', 'Juhu', 'Colaba', 'Worli', 'Dadar',
              'Borivali', 'Malad', 'Thane', 'Navi Mumbai', 'Panvel',
              'Kalyan', 'Mira Road', 'Vasai', 'Virar', 'Pune',
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 border border-red-900/30 hover:border-red-700/50 text-gray-300 text-sm rounded-full font-medium transition-colors"
                style={{ background: 'rgba(139, 0, 0, 0.15)' }}
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
