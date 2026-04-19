import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'

const galleryFaqs = [
  {
    question: 'Are all the escort profile photos genuine and real?',
    answer: 'Yes. Every photo in the Hot Sanjana gallery is verified by our team before publishing. We maintain a strict no-fake-photo policy. The escort you see in the photo is the companion you will meet. If there is ever a discrepancy, we resolve it immediately.',
  },
  {
    question: 'How do I view full escort profiles and additional photos?',
    answer: 'The gallery shows a preview of available profiles. To view full profiles, additional photos, and current availability, simply contact us via call or WhatsApp. Our team will share verified profiles matching your preferences instantly.',
  },
  {
    question: 'How many escort profiles are currently available in Mumbai?',
    answer: 'Hot Sanjana maintains an active roster of 500+ verified escort profiles across Mumbai, Navi Mumbai, Thane, and beyond. Profiles span multiple categories including VIP, Russian, Bengali, North Indian, GFE, housewife, and college companions.',
  },
  {
    question: 'Can I request more photos before confirming a booking?',
    answer: 'Yes. Once you contact us, our team can share additional verified photos of the escort you are interested in via WhatsApp. This helps you make an informed choice before committing to a booking.',
  },
  {
    question: 'How often are new escort profiles added to the gallery?',
    answer: 'New profiles are added regularly as we onboard new verified companions. We recommend contacting us directly for the latest available profiles, as our roster is updated frequently and some of the newest additions may not yet appear in the gallery.',
  },
  {
    question: 'Are all gallery profiles currently available for booking?',
    answer: 'Availability varies based on current bookings and location. When you contact us, our team confirms real-time availability. If your preferred profile is not available, we suggest similar alternatives from our roster.',
  },
  {
    question: 'Can I specifically choose an escort from the gallery?',
    answer: 'Absolutely. You can specify which profile you are interested in when contacting us. We will confirm availability and arrange the booking. If that specific companion is unavailable, we will suggest the closest alternative based on your preferences.',
  },
  {
    question: 'Do escort profiles include physical details like height and age?',
    answer: 'Yes. Full profiles shared via WhatsApp include physical details such as age range, height, build, and personality notes. These help you find the right match. All details are accurate and verified by our team.',
  },
  {
    question: 'What escort categories are represented in the gallery?',
    answer: 'Our gallery features profiles from all major escort categories: VIP escorts, Russian escorts, Bengali escorts, Punjabi escorts, North Indian escorts, South Indian escorts, college companions, housewife companions, GFE specialists, and more.',
  },
  {
    question: 'Are video profiles or video previews available?',
    answer: 'In some cases, short video previews are available for premium profiles. Contact us via WhatsApp to inquire about video profiles for specific categories. Availability varies and is shared privately and securely.',
  },
  {
    question: 'How are escort profiles verified before appearing in the gallery?',
    answer: 'Every escort undergoes a personal verification process that includes identity confirmation, photo authentication, health screening, and a professional assessment. Only verified companions meeting our standards are added to the gallery.',
  },
  {
    question: 'Can I see the profile before meeting the escort in person?',
    answer: 'Yes. You will always receive verified photo confirmation of your companion before the meeting. We never send a different escort from the one confirmed. This is part of our transparency and quality guarantee.',
  },
  {
    question: 'Are the gallery profiles updated to show current availability?',
    answer: 'The gallery provides a general overview of our categories and profile types. For real-time availability and the most current profiles, contact us directly. Our team has up-to-date information on which companions are available at any given time.',
  },
  {
    question: 'What happens if the escort I selected is unavailable?',
    answer: 'If your chosen escort is unavailable, we immediately suggest alternatives with similar attributes from our roster. We never compromise on quality and ensure you are fully satisfied with the replacement suggestion before confirming.',
  },
  {
    question: 'Are there international and Russian escort profiles in the gallery?',
    answer: 'Yes. We have a selection of Russian and international escort profiles available in Mumbai. These are among our most premium profiles and are available in select locations. Contact us to confirm availability of international companions.',
  },
  {
    question: 'Is browsing the gallery confidential and secure?',
    answer: 'The public gallery is accessible online but does not contain personally identifiable information about escorts or clients. Full profiles are shared only via direct and private communication on WhatsApp. Your identity and browsing remain completely confidential.',
  },
]

export const metadata: Metadata = {
  title: 'Gallery | Hot Sanjana Mumbai Escorts',
  description:
    'Browse the Hot Sanjana gallery of premium escorts available in Mumbai. All profiles are 100% verified and available 24/7 across Mumbai.',
  alternates: { canonical: 'https://hotsanjana.in/gallery' },
}

// Placeholder gallery items – replace src with real images
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Hot Sanjana Mumbai Escort Profile ${i + 1}`,
  category: ['VIP', 'Russian', 'Bengali', 'North Indian', 'GFE', 'Local'][i % 6],
}))

export default function GalleryPage() {
  return (
    <>
      <Hero
        badge="Our Gallery"
        title="Browse Escort Profiles"
        subtitle="500+ Verified Profiles"
        description="Explore our curated gallery of premium, verified escorts available across Mumbai. All profiles feature real, unedited photos."
        ctaText="Book Now"
        ctaHref="/contact"
        showStats={false}
      />

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our{' '}
              <span className="gradient-text">Latest Profiles</span>
            </h2>
            <p className="text-gray-400">Contact us directly to view full profiles and availability</p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['All', 'VIP', 'Russian', 'Bengali', 'North Indian', 'GFE', 'Local'].map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 transition-all ${
                  cat === 'All'
                    ? 'text-black border-yellow-500'
                    : 'border-red-900/50 text-gray-300 hover:border-red-600 hover:text-red-300'
                }`}
                style={cat === 'All' ? { background: 'linear-gradient(135deg, #cc9900, #ffd700)', boxShadow: '0 0 20px rgba(255,215,0,0.4)' } : {}}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-red-900/30 hover:border-red-700/50"
                style={{ background: 'linear-gradient(135deg, #1a0500, #2a0800)' }}
              >
                {/* Placeholder – replace with actual images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)', boxShadow: '0 0 20px rgba(220,0,0,0.4)' }}
                  >
                    🔥
                  </div>
                  <p className="text-red-400 font-semibold text-sm">Profile {item.id}</p>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 text-black text-xs font-bold px-3 py-1 rounded-full shadow"
                  style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                >
                  {item.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <a
                    href="/contact"
                    className="w-full text-center py-2.5 font-bold text-sm rounded-full text-white hover:-translate-y-0.5 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)' }}
                  >
                    Book This Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-5 text-lg">
              📲 Want to see more profiles? Contact us directly for the latest available escorts.
            </p>
            <a href="/contact" className="btn-primary">
              View All Profiles
            </a>
          </div>
        </div>
      </section>

      <FAQSection faqs={galleryFaqs} title="Escort Gallery – Frequently Asked Questions" subtitle="Everything you need to know about our escort profiles" />

      <BookingCTA />
    </>
  )
}
