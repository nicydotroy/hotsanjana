import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'

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
                    className="w-full text-center py-2.5 bg-white text-pink-600 font-bold text-sm rounded-full hover:bg-pink-50 transition-colors"
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

      <BookingCTA />
    </>
  )
}
