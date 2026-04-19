import type { Metadata } from 'next'
import Image from 'next/image'
import LocationGrid from '@/components/LocationGrid'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'
import { locations } from '@/data/locations'
import { escortTypes } from '@/data/escort-types'

const locationFaqs = [
  {
    question: 'Which areas of Mumbai does Hot Sanjana cover?',
    answer: 'Hot Sanjana covers 90+ locations across Mumbai including Andheri, Bandra, Juhu, Colaba, Worli, Dadar, Borivali, Malad, Goregaon, Mulund, Kurla, and all major suburban and central areas. We are the most geographically extensive escort service in Mumbai.',
  },
  {
    question: 'Are escort services available in Navi Mumbai?',
    answer: 'Yes. We have a dedicated team of verified escorts based in Navi Mumbai covering areas like Vashi, Kharghar, Nerul, Belapur, Airoli, Ghansoli, and Panvel. Outcall and incall services are both available with the same quality and discretion as our Mumbai operations.',
  },
  {
    question: 'Do you provide escort services in Thane district?',
    answer: 'Yes. Thane is one of our major service areas. We cover Thane city, Kalyan, Dombivli, Ambernath, Bhiwandi, Ulhasnagar, and surrounding areas. Same-day and advance bookings are available throughout Thane district.',
  },
  {
    question: 'Are call girls available in Vasai and Virar?',
    answer: 'Yes. We serve Vasai, Virar, Nalasopara, and the broader Vasai-Virar belt. Our escorts are familiar with the area and can arrange both outcall visits to your location and incall appointments as per your preference.',
  },
  {
    question: 'Can I book escorts in South Mumbai areas like Colaba and Worli?',
    answer: 'Absolutely. South Mumbai including Colaba, Nariman Point, Churchgate, Marine Lines, Worli, Prabhadevi, and Parel is fully covered. These are among our highest-demand areas and we maintain dedicated profiles serving South Mumbai clients.',
  },
  {
    question: 'Are escort services available in Andheri West and Andheri East?',
    answer: 'Yes. Andheri is one of our most active service areas. Both Andheri West and Andheri East are covered, along with nearby areas like Lokhandwala, Versova, Oshiwara, MIDC, and Chakala. Multiple escorts are available in Andheri at any given time.',
  },
  {
    question: 'Do you have escorts available in Bandra and Juhu?',
    answer: 'Yes. Bandra (West and East) and Juhu are premium locations for us. These areas receive high demand and we have top-quality verified escorts available here. Both incall and outcall services are offered, including hotel room delivery in Juhu beach hotels.',
  },
  {
    question: 'Are escort services available on the outskirts and distant suburbs?',
    answer: 'Yes. We serve areas like Dahisar, Kandivali, Mira Road, Bhayander, Vasai Road, and even farther locations on request. For very distant areas, travel time and any applicable charges are discussed at the time of booking.',
  },
  {
    question: 'Is same-day escort service available across all Mumbai locations?',
    answer: 'Yes. Same-day service is available across all our coverage areas. For standard locations, we can arrange a companion within 60–90 minutes of your booking confirmation. Calling us directly ensures the fastest turnaround for same-day requests.',
  },
  {
    question: 'Do travel charges apply for escorts going to distant locations?',
    answer: 'Standard outcall rates apply across most Mumbai locations. For very distant areas or locations outside our primary coverage zone, minimal travel charges may apply and are always communicated transparently before you confirm the booking.',
  },
  {
    question: 'Can escorts come directly to my hotel room anywhere in Mumbai?',
    answer: 'Yes. Hotel room delivery is available across all Mumbai locations. Our escorts are experienced with hotel visits and arrive discreetly. They are professional, well-presented, and know how to navigate hotel environments without drawing attention.',
  },
  {
    question: 'Are there call girls available in Borivali and Malad?',
    answer: 'Yes. Borivali, Malad, Kandivali, and Goregaon are all active service areas. We have multiple verified profiles based in these northern suburb areas. Incall locations are also available in this belt for added convenience.',
  },
  {
    question: 'Do you serve Pune and other cities outside Mumbai?',
    answer: 'Yes. We extend our services to Pune and can arrange escorts for outstation visits. Pune bookings require advance notice and the logistics – including transport and accommodation if needed – are arranged as part of the booking process.',
  },
  {
    question: 'How long does it take for an escort to arrive at my location?',
    answer: 'For standard Mumbai locations, the typical arrival time is 45–90 minutes from booking confirmation. For areas in Navi Mumbai and Thane, allow 60–120 minutes. Exact timing is confirmed at the time of booking based on current traffic and escort availability.',
  },
  {
    question: 'Are escort services available in Panvel and Kharghar?',
    answer: 'Yes. Panvel, Kharghar, Kamothe, Ulwe, and New Panvel are all within our service coverage. These Navi Mumbai areas have growing demand and we maintain a steady roster of companions available for bookings in this zone.',
  },
  {
    question: 'Which location in Mumbai has the highest escort availability?',
    answer: 'Andheri, Bandra, Thane, and Navi Mumbai consistently have the highest availability of verified escorts due to demand. South Mumbai and Juhu also have strong availability. For any specific area, contact us and we will confirm current availability instantly.',
  },
]

export const metadata: Metadata = {
  title: 'Escorts by Location in Mumbai | All Areas | Hot Sanjana',
  description:
    'Browse escorts and call girls by location across 90+ areas in Mumbai, Navi Mumbai, Thane, Vasai-Virar and beyond. Find escorts near you.',
  alternates: { canonical: 'https://hotsanjana.in/location' },
  openGraph: {
    type: 'website',
    title: 'Escorts by Location in Mumbai | 90+ Areas | Hot Sanjana',
    description: 'Find verified escorts near you across 90+ Mumbai locations including Andheri, Bandra, Thane, Navi Mumbai and more.',
    url: 'https://hotsanjana.in/location',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Mumbai Escort Locations – Hot Sanjana' }],
  },
}

// Group by region
const regions = locations.reduce<Record<string, typeof locations>>((acc, loc) => {
  const region = loc.area || 'Other'
  if (!acc[region]) acc[region] = []
  acc[region].push(loc)
  return acc
}, {})

export default function LocationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'All Locations', href: '/location' }]} />

      <Hero
        badge="All Locations"
        title="Escorts Across Mumbai & Beyond"
        subtitle="90+ Locations Covered"
        description="Find premium verified escorts near you. We cover all major areas of Mumbai, Navi Mumbai, Thane, Vasai-Virar, Palghar, and even Pune."
        ctaText="Book Now"
        ctaHref="/"
        showStats={false}
      />

      {/* ── Escort Category Photo Strip ── */}
      <section className="py-8 lg:py-12" style={{ background: '#040000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold tracking-[0.25em] text-red-500 uppercase mb-5">Our Escort Categories</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {escortTypes.slice(0, 6).map((type) => (
              <a
                key={type.slug}
                href={`/escort-types/${type.slug}`}
                className="group relative rounded-xl overflow-hidden border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(220,0,0,0.3)]"
              >
                <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden">
                  {type.image ? (
                    <Image
                      src={type.image}
                      alt={type.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 17vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl" style={{ background: '#1f0800' }}>
                      {type.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {type.badge && (
                    <div
                      className="absolute top-1.5 left-1.5 text-black text-[9px] font-black px-2 py-0.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                    >
                      {type.badge}
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-bold leading-tight">{type.name}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Browse Escorts by{' '}
              <span className="gradient-text">District &amp; Area</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {locations.length}+ locations covered. Click any area to find available escorts.
            </p>
          </div>

          {Object.entries(regions).map(([region, locs]) => (
            <div key={region} className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-xl font-bold text-white">{region}</h3>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #dc0000, transparent)' }} />
                <span className="text-sm text-gray-500 font-medium">{locs.length} areas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {locs.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`/escorts/${loc.slug}`}
                    className="group rounded-xl p-3.5 text-center border border-red-900/30 hover:border-red-700/50 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                    style={{ background: 'linear-gradient(135deg, #140500, #1a0800)' }}
                  >
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-red-400 transition-colors block">
                      {loc.name}
                    </span>
                    <span className="text-xs text-gray-600 mt-0.5 block">View escorts</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={locationFaqs} title="Mumbai Escort Locations – Frequently Asked Questions" subtitle="Coverage, availability, and booking details for all Mumbai areas" />

      <BookingCTA
        title="Don't See Your Area?"
        subtitle="We cover even more locations. Call us and we'll arrange escorts to any Mumbai address."
      />
    </>
  )
}
