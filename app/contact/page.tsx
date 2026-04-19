import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_CONFIG } from '@/data/services'

const contactFaqs = [
  {
    question: 'How do I contact Hot Sanjana to make a booking?',
    answer: 'You can reach us via phone call or WhatsApp at +91-9038976363. Both options connect you directly to our booking team who respond within minutes. For non-urgent queries, you can also email us at sanjanadotsingh@gmail.com.',
  },
  {
    question: 'How quickly do you respond to enquiries?',
    answer: 'We respond to calls instantly and to WhatsApp messages within 2–5 minutes. Our team is staffed around the clock, so even late-night or early-morning enquiries receive a prompt response. You will never be left waiting.',
  },
  {
    question: 'Is WhatsApp the best way to contact Hot Sanjana?',
    answer: 'WhatsApp is one of the quickest and most convenient ways to reach us. It allows you to share preferences, receive profile photos, and confirm bookings all in one secure chat. Phone calls are equally welcome for instant bookings.',
  },
  {
    question: 'Are bookings available 24 hours a day, 7 days a week?',
    answer: 'Yes. Hot Sanjana operates 24/7 without exception – including weekends, public holidays, and festival days. Our booking team is always on standby and escorts are available at all hours across all major Mumbai locations.',
  },
  {
    question: 'Can I book escort services via email?',
    answer: 'Yes, you can send an enquiry to sanjanadotsingh@gmail.com. However, for faster response and same-day bookings, calling or messaging on WhatsApp is recommended. Email is best suited for non-urgent inquiries and pre-planned bookings.',
  },
  {
    question: 'What information should I provide when making first contact?',
    answer: 'To make the booking process smooth, share your preferred location or area in Mumbai, the type of companion you are looking for, the date and time of the booking, and the duration. Our team will handle everything else from there.',
  },
  {
    question: 'Is my contact information kept private and confidential?',
    answer: 'Absolutely. We have a strict confidentiality policy. Your phone number, name, and any personal details shared during the booking process are never stored, shared, or used for any other purpose. Complete privacy is guaranteed.',
  },
  {
    question: 'Do you call back or only respond to incoming messages?',
    answer: 'We respond to both. If you call and we are briefly unavailable, we call back within minutes. If you send a WhatsApp message, we reply promptly. You can initiate contact either way and we will ensure you are looked after.',
  },
  {
    question: 'Can I visit in person without an appointment?',
    answer: 'Hot Sanjana operates as a discreet, contact-based service and does not have a walk-in public office. All bookings are arranged by phone or WhatsApp to maintain privacy for both clients and companions. Please contact us to arrange everything.',
  },
  {
    question: 'What happens after I make my initial contact?',
    answer: 'After you first contact us, our team discusses your preferences, shares available profiles, confirms a companion, and arranges all logistics including time, location, and any special requests. The whole process is quick, seamless, and confidential.',
  },
  {
    question: 'Can I specify my preferences and requirements when I contact you?',
    answer: 'Yes, and we encourage it. The more specific you are about your preferences – escort category, physical appearance, duration, location, and experience type – the better we can match you with the ideal companion from our roster.',
  },
  {
    question: 'What if I need to cancel or reschedule after contacting you?',
    answer: 'We understand plans change. Contact us as early as possible if you need to cancel or reschedule. We accommodate changes based on companion availability and ask for reasonable advance notice to avoid inconveniencing our escorts.',
  },
  {
    question: 'Is messaging on WhatsApp secure and private?',
    answer: 'WhatsApp uses end-to-end encryption, making it one of the most secure messaging platforms available. Your conversations with us are private and cannot be intercepted. We recommend using WhatsApp for all booking communications.',
  },
  {
    question: 'Do you serve international clients and tourists visiting Mumbai?',
    answer: 'Yes. A significant portion of our clients are international tourists, NRIs, and business travellers. Our team is fluent in English and familiar with hotel-based bookings. We make the process straightforward and comfortable for international visitors.',
  },
  {
    question: 'How do I know I am contacting the genuine Hot Sanjana service?',
    answer: 'The official Hot Sanjana contact number is +91-9038976363. Our website is hotsanjana.in. Beware of fake numbers or websites impersonating us. If in doubt, verify through our official website before sharing any personal information.',
  },
  {
    question: 'Can I speak to someone before committing to a booking?',
    answer: 'Yes. You are under no obligation when you first contact us. Feel free to ask questions, discuss preferences, and review available profiles before making any decision. We are happy to assist and answer any questions without pressure.',
  },
]

export const metadata: Metadata = {
  title: 'Contact Us | Hot Sanjana | +91-9038976363',
  description:
    'Contact Hot Sanjana for premium escort bookings in Mumbai. Call +91-9038976363 or WhatsApp +91-90389-76363. Available 24/7 across all Mumbai locations.',
  alternates: { canonical: 'https://hotsanjana.in/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Hot Sanjana | +91-9038976363 | Mumbai Escorts',
    description: 'Contact Hot Sanjana for escort bookings in Mumbai. Call or WhatsApp +91-9038976363. Available 24/7.',
    url: 'https://hotsanjana.in/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Contact Hot Sanjana Mumbai' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />

      <Hero
        badge="Get In Touch"
        title="Contact Hot Sanjana"
        subtitle="Available 24 Hours, 7 Days a Week"
        description="Ready to book? Have questions? Our team is available around the clock to assist you. Reach out via phone, WhatsApp, or email."
        ctaText="Call Now"
        ctaHref={`tel:${SITE_CONFIG.phone}`}
        showStats={false}
      />

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                How to{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Reach Us
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                We respond within minutes. Choose whichever method is most convenient for you.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-5 p-5 rounded-2xl border hover:border-red-600/50 hover:-translate-y-0.5 group transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #120500, #1f0800)', borderColor: 'rgba(139,0,0,0.35)' }}
                  rel="nofollow"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)', boxShadow: '0 0 20px rgba(220,0,0,0.4)' }}
                  >
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call us directly</p>
                    <p className="text-xl font-bold text-red-400 group-hover:text-red-300">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Available 24/7 – immediate response</p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-5 p-5 rounded-2xl border hover:border-green-600/50 hover:-translate-y-0.5 group transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #001a00, #002600)', borderColor: 'rgba(37,211,102,0.2)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 0 20px rgba(37,211,102,0.3)' }}
                  >
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Message on WhatsApp</p>
                    <p className="text-xl font-bold text-green-400 group-hover:text-green-300">
                      {SITE_CONFIG.whatsappDisplay}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Fast, secure & private messaging</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-5 p-5 rounded-2xl border hover:border-orange-600/50 hover:-translate-y-0.5 group transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #120500, #1f0800)', borderColor: 'rgba(139,0,0,0.35)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)', boxShadow: '0 0 20px rgba(255,215,0,0.3)' }}
                  >
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email us</p>
                    <p className="text-lg font-bold text-orange-400 group-hover:text-orange-300 break-all">
                      {SITE_CONFIG.email}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">For non-urgent inquiries</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking Steps */}
            <div
              className="rounded-3xl p-8 border"
              style={{ background: 'linear-gradient(135deg, #0d0000, #1a0500)', borderColor: 'rgba(139,0,0,0.3)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">How to Book</h3>
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
                    desc: "Tell us your preferences – type, location, and duration. We'll suggest the best available options.",
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
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)', boxShadow: '0 0 15px rgba(220,0,0,0.4)' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                className="mt-8 p-4 rounded-xl border border-red-900/30"
                style={{ background: 'rgba(0,0,0,0.4)' }}
              >
                <p className="text-sm text-gray-400 text-center">
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

      <FAQSection faqs={contactFaqs} title="Contact & Booking – Frequently Asked Questions" subtitle="All you need to know about reaching us and making a booking" />

      <BookingCTA />
    </>
  )
}
