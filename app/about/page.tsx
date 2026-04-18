import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import { SITE_CONFIG } from '@/data/services'

export const metadata: Metadata = {
  title: 'About Hot Sanjana | Mumbai\'s Premier Escort Service',
  description:
    'Learn about Hot Sanjana – Mumbai\'s most trusted and discreet escort service. 10+ years of excellence, 500+ verified escorts, serving all Mumbai locations 24/7.',
  alternates: { canonical: 'https://hotsanjana.in/about' },
}

const aboutFaqs = [
  {
    question: 'How long has Hot Sanjana been operating?',
    answer: 'Hot Sanjana has been operating as one of Mumbai\'s premier escort services for over a decade. We have built our reputation on trust, discretion, and exceptional service quality.',
  },
  {
    question: 'How do you verify your escorts?',
    answer: 'All escorts undergo a thorough verification process including identity verification, health checks, and professional training. We maintain strict standards to ensure client safety and satisfaction.',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. Client confidentiality is our top priority. We never share, sell, or disclose any client information. All interactions are completely private and secure.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We cover all of Mumbai (South Mumbai to the suburbs), Navi Mumbai, Thane, Vasai-Virar, Palghar, and even Pune. With 90+ locations, we can serve you almost anywhere in the Mumbai Metropolitan Region.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        title="About Hot Sanjana"
        subtitle="Mumbai's Most Trusted Escort Service"
        description="A decade of excellence, thousands of satisfied clients, and a commitment to professionalism and discretion that sets us apart."
        ctaText="Contact Us"
        ctaHref="/contact"
        showStats={false}
      />

      {/* ── Mission Section ── */}
      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Our{' '}
                <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hot Sanjana was founded with a simple vision: to provide premium, professional escort services in Mumbai with an unwavering commitment to client satisfaction, safety, and discretion.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over the years, we have grown to become one of Mumbai&apos;s most trusted escort agencies, serving clients from all walks of life – corporate professionals, tourists, businessmen, and more. Our reputation is built on three core pillars: verified escorts, complete discretion, and 24/7 availability.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, Hot Sanjana operates across 90+ locations throughout Mumbai, Navi Mumbai, Thane, and beyond – making us the most geographically extensive escort service in the Mumbai Metropolitan Region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '500+', label: 'Verified Escorts', icon: '💎' },
                { stat: '90+', label: 'Locations Covered', icon: '📍' },
                { stat: '10K+', label: 'Happy Clients', icon: '🔥' },
                { stat: '24/7', label: 'Always Available', icon: '🕐' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6 text-center border border-red-900/30 hover:border-red-700/50 transition-colors"
                  style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1">{item.stat}</div>
                  <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16" style={{ background: '#0d0000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Our{' '}
            <span className="gradient-text">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Absolute Discretion',
                desc: 'Every interaction is 100% confidential. We never share client data or discuss bookings with anyone.',
              },
              {
                icon: '✅',
                title: 'Verified Quality',
                desc: 'Every escort is personally verified. No fake profiles, no surprises – what you see is what you get.',
              },
              {
                icon: '🌙',
                title: '24/7 Availability',
                desc: 'Day or night, weekday or weekend – our team is always available to assist you.',
              },
              {
                icon: '💎',
                title: 'Premium Experience',
                desc: 'We curate only the finest companions who are professional, elegant, and genuinely enjoyable.',
              },
              {
                icon: '🛡️',
                title: 'Safety First',
                desc: 'Safety of both clients and escorts is paramount. We maintain strict health and safety standards.',
              },
              {
                icon: '🔥',
                title: 'Client Satisfaction',
                desc: 'Your satisfaction is our mission. We go above and beyond to ensure every experience exceeds expectations.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl p-6 border border-red-900/30 hover:border-red-700/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Get in{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-red-900/30 hover:border-red-700/50 transition-colors" style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}>
              <div className="text-3xl mb-3">📞</div>
              <p className="font-semibold text-white mb-1">Phone</p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-red-400 font-bold hover:text-red-300">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="rounded-2xl p-6 border border-red-900/30 hover:border-red-700/50 transition-colors" style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}>
              <div className="text-3xl mb-3">💬</div>
              <p className="font-semibold text-white mb-1">Telegram</p>
              <a href={SITE_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-yellow-400 font-bold hover:text-yellow-300">
                @{SITE_CONFIG.telegramHandle}
              </a>
            </div>
            <div className="rounded-2xl p-6 border border-red-900/30 hover:border-red-700/50 transition-colors" style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}>
              <div className="text-3xl mb-3">✉️</div>
              <p className="font-semibold text-white mb-1">Email</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-orange-400 font-bold hover:text-orange-300 break-all">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={aboutFaqs} title="Common Questions About Us" />

      <BookingCTA />
    </>
  )
}
