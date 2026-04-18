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

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Latest Profiles
              </span>
            </h2>
            <p className="text-gray-600">Contact us directly to view full profiles and availability</p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['All', 'VIP', 'Russian', 'Bengali', 'North Indian', 'GFE', 'Local'].map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 transition-all ${
                  cat === 'All'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white border-pink-500 shadow-pink'
                    : 'border-pink-200 text-pink-600 hover:border-pink-400 hover:bg-pink-50'
                }`}
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
                className="group relative aspect-[3/4] bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-pink-100 hover:border-pink-300"
              >
                {/* Placeholder – replace with actual images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-3xl mb-3 shadow-lg">
                    💋
                  </div>
                  <p className="text-pink-700 font-semibold text-sm">Profile {item.id}</p>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
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
            <p className="text-gray-600 mb-5 text-lg">
              📲 Want to see more profiles? Contact us directly for the latest available escorts.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold rounded-full hover:shadow-pink-lg hover:-translate-y-0.5 transition-all"
            >
              View All Profiles
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
