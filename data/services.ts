export const SITE_CONFIG = {
  name: 'Hot Sanjana',
  tagline: 'Mumbai\'s Premier Escort Service',
  domain: 'hotsanjana.in',
  baseUrl: 'https://hotsanjana.in',
  phone: '+919038976363',
  phoneDisplay: '+91-90389-76363',
  whatsappUrl: 'https://wa.me/919038976363',
  whatsappDisplay: '+91-90389-76363',
  email: 'sanjanadotsingh@gmail.com',
  whatsapp: '919038976363',
  primaryColor: '#FF1493',
  secondaryColor: '#FF69B4',
}

export interface Service {
  id: string
  name: string
  slug: string
  shortDesc: string
  description: string
  icon: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Incall Service',
    slug: 'incall',
    shortDesc: 'Visit our private, premium locations',
    description: 'Our incall service provides access to our exclusive private locations across Mumbai. Enjoy a discreet, comfortable, and fully equipped space where you can relax completely.',
    icon: '🏠',
    image: '/images/services/incall.jpg',
    features: ['Private, secure locations', 'Fully air-conditioned rooms', 'Complete privacy guaranteed', 'Refreshments provided', 'Flexible timing'],
  },
  {
    id: '2',
    name: 'Outcall Service',
    slug: 'outcall',
    shortDesc: 'We come to your hotel or residence',
    description: 'Our discreet outcall service delivers our companions directly to your hotel room, residence, or any location of your choice across Mumbai, Navi Mumbai, and Thane.',
    icon: '🚗',
    image: '/images/services/outcall.jpg',
    features: ['Hotel visits accepted', 'Residence visits available', 'All Mumbai areas covered', 'Punctual & professional', 'Discreet arrival & departure'],
  },
  {
    id: '3',
    name: 'VIP Package',
    slug: 'vip',
    shortDesc: 'Elite service for discerning clients',
    description: 'Our VIP packages offer the ultimate companion experience with our most premium escorts, extended durations, multi-location options, and bespoke arrangements.',
    icon: '👑',
    image: '/images/services/vip.jpg',
    features: ['Elite model companions', 'Multi-hour & overnight', 'Personalised arrangements', 'Priority booking', 'Complete confidentiality'],
  },
  {
    id: '4',
    name: 'Overnight Stay',
    slug: 'overnight',
    shortDesc: 'Complete evening and night experience',
    description: 'For clients seeking extended companionship, our overnight service provides a full evening of sophisticated company – dinner, entertainment, and intimate time together.',
    icon: '🌙',
    image: '/images/services/overnight.jpg',
    features: ['Full evening service', 'Dinner companion included', 'Hotel stays available', 'Girlfriend Experience option', 'Available 7 nights/week'],
  },
  {
    id: '5',
    name: 'Girlfriend Experience',
    slug: 'gfe',
    shortDesc: 'Authentic romance and connection',
    description: 'The Girlfriend Experience creates genuine emotional warmth and romantic connection – going beyond physical companionship to provide true intimacy and understanding.',
    icon: '💕',
    image: '/images/services/gfe.jpg',
    features: ['Emotional connection', 'Romantic dinner dates', 'Genuine affection', 'Meaningful conversation', 'Extended engagement options'],
  },
  {
    id: '6',
    name: '24/7 Availability',
    slug: 'availability',
    shortDesc: 'Available round the clock',
    description: 'Our escorts are available 24 hours a day, 7 days a week – including weekends and holidays. Late-night bookings and early morning arrangements are fully accommodated.',
    icon: '🕐',
    image: '/images/services/availability.jpg',
    features: ['Round-the-clock service', 'Weekends & holidays', 'Late night bookings', 'Same-day arrangements', 'Rapid confirmation'],
  },
]

export const features = [
  {
    icon: '✅',
    title: 'Verified Profiles',
    description: '100% verified escorts with authentic photos and identity confirmation',
    stat: '500+',
    statLabel: 'Verified Escorts',
  },
  {
    icon: '🔒',
    title: 'Total Discretion',
    description: 'Your privacy is our highest priority – absolute confidentiality guaranteed',
    stat: '100%',
    statLabel: 'Privacy Protected',
  },
  {
    icon: '🕐',
    title: '24/7 Available',
    description: 'Round-the-clock service across all Mumbai locations, every day of the year',
    stat: '24/7',
    statLabel: 'Always Available',
  },
  {
    icon: '📍',
    title: 'All Mumbai Areas',
    description: 'Coverage across South Mumbai, Western Suburbs, Eastern Suburbs & Navi Mumbai',
    stat: '90+',
    statLabel: 'Locations Covered',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Rahul M.',
    location: 'Bandra',
    rating: 5,
    date: 'Dec 2024',
    text: 'Exceptional service from Hot Sanjana. The booking was seamless, the companion was stunning and professional. Will definitely use again.',
  },
  {
    id: 2,
    name: 'Arjun S.',
    location: 'Powai',
    rating: 5,
    date: 'Jan 2025',
    text: 'As a frequent business traveller, I\'ve tried many services. Hot Sanjana is by far the most reliable, most discreet, and most professional. Highly recommended.',
  },
  {
    id: 3,
    name: 'Vikram K.',
    location: 'Worli',
    rating: 5,
    date: 'Jan 2025',
    text: 'The VIP package exceeded all my expectations. A truly world-class experience delivered with complete privacy and professionalism.',
  },
  {
    id: 4,
    name: 'Dev P.',
    location: 'Andheri',
    rating: 5,
    date: 'Feb 2025',
    text: 'First-time user and I was very impressed with the quick response on WhatsApp and the quality of the companion. 10/10 experience.',
  },
  {
    id: 5,
    name: 'Suresh T.',
    location: 'Thane',
    rating: 5,
    date: 'Feb 2025',
    text: 'Reliable, punctual, and absolutely gorgeous. Hot Sanjana has set the gold standard for escort services in Mumbai. Truly the best.',
  },
  {
    id: 6,
    name: 'Nikhil R.',
    location: 'Navi Mumbai',
    rating: 5,
    date: 'Mar 2025',
    text: 'Used the service three times now. Consistent quality, always discreet. The WhatsApp booking is very convenient. Strongly recommend.',
  },
]

export const faqs = [
  {
    question: 'How do I book an escort in Mumbai?',
    answer: 'Booking is simple: contact us via WhatsApp +91-90389-76363 or call +91-90389-76363. Tell us your preferred type of companion, location, date, and time. We confirm availability and send profile options within minutes.',
  },
  {
    question: 'Are all escort profiles verified?',
    answer: 'Yes, absolutely. Every escort profile on Hot Sanjana is 100% verified with identity confirmation and authentic photographs. We maintain the highest standards of verification to ensure quality and safety.',
  },
  {
    question: 'What areas do you cover in Mumbai?',
    answer: 'We cover all of Mumbai – South Mumbai (Colaba, Marine Drive, Worli), Western Suburbs (Bandra, Andheri, Juhu, Borivali, Malad), Eastern Suburbs (Powai, Ghatkopar, Mulund), Navi Mumbai (Vashi, Nerul, Kharghar, Panvel), and Thane district.',
  },
  {
    question: 'Is the service completely discreet?',
    answer: 'Discretion is our highest priority. All bookings are handled confidentially. Our escorts arrive and depart discreetly. We never share client information under any circumstances. Your privacy is fully protected at every stage.',
  },
  {
    question: 'What is the difference between incall and outcall service?',
    answer: 'Incall means you visit our private location. Outcall means our escort comes to your hotel, residence, or chosen location. Both options are available across Mumbai and provide equal levels of discretion and service quality.',
  },
  {
    question: 'What are your rates for escort service in Mumbai?',
    answer: 'Rates vary based on escort type, duration, and service. We offer competitive pricing for all budgets – from affordable local escorts to premium VIP companions. Contact us directly for current rates and special package offers.',
  },
  {
    question: 'Can I book for overnight stays?',
    answer: 'Yes, overnight bookings are available. Our overnight service provides a complete evening experience including dinner companionship and a full night together. This is available 7 days a week subject to companion availability.',
  },
]
