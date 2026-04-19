import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import { SITE_CONFIG } from '@/data/services'
import { escortTypes } from '@/data/escort-types'

const typesFaqs = [
  {
    question: 'What escort categories does Hot Sanjana offer in Mumbai?',
    answer: 'Hot Sanjana offers a wide range of escort categories including VIP escorts, Russian escorts, Bengali escorts, Punjabi escorts, North Indian escorts, South Indian escorts, housewife companions, college girl escorts, GFE specialists, air hostess escorts, and more. All categories are available 24/7.',
  },
  {
    question: 'What is the most popular escort category in Mumbai?',
    answer: 'VIP escorts and GFE (Girlfriend Experience) are consistently the most requested categories. Bengali and Russian escorts are also very popular. However, every client has unique tastes and we have categories to suit all preferences.',
  },
  {
    question: 'Are genuine Russian escorts really available in Mumbai?',
    answer: 'Yes. Hot Sanjana maintains a verified roster of Russian and Eastern European escorts available in Mumbai. These are premium profiles and are among the most sought-after companions. Contact us to confirm current availability of Russian escorts.',
  },
  {
    question: 'What makes VIP escorts different from regular companions?',
    answer: 'VIP escorts are our most premium profiles – typically more experienced, elegantly presented, and skilled at providing an elite companionship experience. They are ideal for high-profile events, business dinners, hotel bookings, and clients seeking a luxury experience.',
  },
  {
    question: 'What is a GFE (Girlfriend Experience) and how does it differ?',
    answer: 'The Girlfriend Experience (GFE) is a companionship style where the escort engages with you as a genuine partner – offering affection, natural conversation, shared activities, and a warm emotional connection. GFE companions are specially trained to make the experience feel authentic and personal.',
  },
  {
    question: 'Are Bengali escorts available in Mumbai?',
    answer: 'Yes. Bengali escorts are one of our most popular categories in Mumbai. Known for their charm, intelligence, and beauty, our Bengali companions are verified and available for both incall and outcall bookings across all Mumbai locations.',
  },
  {
    question: 'What is a housewife companion service?',
    answer: 'Our housewife companions are mature, experienced women who provide sophisticated companionship. They are discreet, natural in social settings, and ideal for clients who prefer a more mature and grounded companion rather than a younger escort.',
  },
  {
    question: 'Are college escort profiles genuine and real?',
    answer: 'Yes. All profiles in our college category are verified. These companions are young adults who have chosen to work in this profession. Every profile is authenticated by our team. We do not use fake or stock photos for any of our categories.',
  },
  {
    question: 'What is the difference between North Indian and South Indian escorts?',
    answer: 'These categories reflect different regional backgrounds, appearances, and cultural traits. North Indian escorts typically have wheatish to fair complexions and a vivacious personality. South Indian escorts are known for their dusky beauty and grace. Both categories are popular with different client preferences.',
  },
  {
    question: 'Do you offer companion services for couples?',
    answer: 'Yes. We can arrange companion services for couples who are looking for a unique shared experience. This is a discreet and premium booking and is arranged directly with our senior booking team. Please contact us to discuss requirements.',
  },
  {
    question: 'Are there mature or MILF escort profiles available?',
    answer: 'Yes. We have a selection of mature companion profiles for clients who prefer experienced women in the 30–45 age range. These companions are known for their confidence, discretion, and ability to provide a deeply satisfying experience.',
  },
  {
    question: 'What is the Air Hostess escort category?',
    answer: 'Our air hostess category features companions who have an elegant, professional appearance similar to airline crew. They are well-groomed, poised, and skilled at sophisticated social interaction – perfect for corporate events, business meetings, or high-end hotel bookings.',
  },
  {
    question: 'Are there English-speaking escorts available for international clients?',
    answer: 'Yes. Several of our escorts – particularly in the VIP, Russian, and GFE categories – are fluent in English. This makes them ideal for international visitors, NRIs, and business travellers who prefer English-speaking companionship.',
  },
  {
    question: 'Can I switch to a different escort category after my initial request?',
    answer: 'Yes. You can change your preference at any point before the booking is confirmed. Simply let our team know and we will suggest alternatives from your newly preferred category. We always aim to match you with the companion that best suits your taste.',
  },
  {
    question: 'Are all escort categories available in all Mumbai locations?',
    answer: 'Most categories are available across all major Mumbai locations. Some niche categories like Russian escorts may have more limited availability in specific areas. When you contact us, our team will confirm which categories are currently available at your preferred location.',
  },
  {
    question: 'Which escort category is best for a first-time client?',
    answer: 'For first-time clients, we recommend the GFE (Girlfriend Experience) category as it offers a natural, relaxed, and welcoming dynamic. Our team is also happy to guide you through the selection process. Feel free to call or WhatsApp us for a no-pressure consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Escort Types in Mumbai | VIP, Russian, Bengali & More | Hot Sanjana',
  description:
    'Browse all escort categories in Mumbai: VIP escorts, Russian escorts, Bengali escorts, GFE, housewife companions, and more. All verified and available 24/7.',
  alternates: { canonical: 'https://hotsanjana.in/types' },
}

export default function TypesPage() {
  return (
    <>
      <Hero
        badge="All Categories"
        title="Escort Categories in Mumbai"
        subtitle="Find Your Perfect Companion"
        description="Choose from our wide selection of carefully curated escort categories. All profiles are verified, professional, and committed to your satisfaction."
        ctaText="Book Now"
        ctaHref="/"
        showStats={false}
      />

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All{' '}
              <span className="gradient-text">Escort Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer {escortTypes.length} distinct escort categories to suit every taste and preference
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {escortTypes.map((type) => (
              <div
                key={type.slug}
                className="group rounded-2xl overflow-hidden border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(220,0,0,0.3)]"
                style={{ background: '#0d0000' }}
              >
                <Link href={`/escort-types/${type.slug}`} className="block">
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    {type.image ? (
                      <Image
                        src={type.image}
                        alt={type.imageAlt}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: '#1f0800' }}>
                        {type.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    {type.badge && (
                      <div
                        className="absolute top-2 left-2 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                      >
                        {type.badge}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-white font-bold text-sm leading-tight group-hover:text-red-400 transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-orange-400 text-[11px] mt-0.5 line-clamp-1">{type.tagline}</p>
                    </div>
                  </div>
                </Link>
                <div className="px-3 pb-4 pt-3 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-full text-white hover:-translate-y-0.5 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)' }}
                    rel="nofollow"
                    aria-label={`Call to book ${type.name}`}
                  >
                    📞 Call Now
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-full text-black hover:-translate-y-0.5 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                    aria-label={`WhatsApp to book ${type.name}`}
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={typesFaqs} title="Escort Categories – Frequently Asked Questions" subtitle="Everything you need to know about our escort types in Mumbai" />

      <BookingCTA title="Ready to Book?" subtitle="Our team is available 24/7 to help you find the perfect companion" />
    </>
  )
}
