export interface EscortType {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  imageAlt: string
  image: string
  bgGradient: string
  icon?: string
  badge?: string
}

export const escortTypes: EscortType[] = [
  {
    slug: 'vip',
    name: 'VIP Escorts',
    tagline: 'Elite Companions for High-Profile Clients',
    description: 'Our VIP escorts are the pinnacle of luxury companionship – handpicked from elite circles for their beauty, intelligence, and impeccable social grace.',
    longDescription: 'Our VIP escort service represents the absolute zenith of companion services in Mumbai. These are not simply attractive companions – they are sophisticated, educated, and socially adept individuals capable of accompanying you to the most exclusive events, business dinners, private yacht parties, and high-profile galas. Each VIP escort undergoes a rigorous selection process ensuring they possess the beauty, intelligence, language skills, and social awareness demanded by our most discerning clientele.',
    features: ['5-star hotel service', 'International travel companion', 'Business dinner partner', 'Complete anonymity', 'Fluent English & Hindi', 'Elite model figures'],
    imageAlt: 'VIP Escorts Mumbai – Elite High-Class Companions',
    image: '/images/escort-types/vip.jpg',
    bgGradient: 'from-pink-600 to-rose-400',
    icon: '💎',
    badge: 'Most Popular',
  },
  {
    slug: 'russian',
    name: 'Russian Escorts',
    tagline: 'European Glamour in the Heart of Mumbai',
    description: 'International beauty meets Indian hospitality. Our Russian escorts bring Eastern European elegance, fair features, and multilingual charm to Mumbai.',
    longDescription: 'Our Russian and Eastern European escorts are among the most sought-after companions in Mumbai – celebrated for their striking beauty, statuesque figures, and warm, engaging personalities. These international companions are legally residing in India and are passionate about providing genuine, memorable companionship experiences. Fluent in English and often in multiple languages, they are equally comfortable at luxury hotel dinners, corporate events, or private leisurely evenings.',
    features: ['Authentic Eastern European beauties', 'Multilingual (English, Russian)', 'Hotel-friendly service', 'Outcall & incall available', 'International standard', 'Verified profiles only'],
    imageAlt: 'Russian Escorts Mumbai – International European Companions',
    image: '/images/escort-types/russian.jpg',
    bgGradient: 'from-blue-500 to-pink-500',
    icon: '🌍',
    badge: 'International',
  },
  {
    slug: 'bengali',
    name: 'Bengali Escorts',
    tagline: 'The Intellectual Charm of East India',
    description: 'Bengali escorts celebrated for their artistic sensibility, sharp intellect, and classic beauty. A cultural companion experience unlike any other.',
    longDescription: 'Bengali escorts carry a unique cultural heritage – rooted in Bengal\'s extraordinarily rich tradition of literature, music, cinema, and intellectual thought. Our Bengali companions are educated, articulate, and culturally sophisticated, capable of engaging conversation as naturally as they provide warm physical companionship. Whether you appreciate Tagore\'s poetry, Bengali cuisine, or simply the magnetism of a confident, cultured companion, our Bengali escorts offer an unforgettable experience.',
    features: ['Educated & articulate', 'Classic Bengali beauty', 'Cultural sophistication', 'Gentle & warm personality', 'Literary & artistic interests', 'Excellent conversationalists'],
    imageAlt: 'Bengali Escorts Mumbai – Intellectual East Indian Companions',
    image: '/images/escort-types/bengali.jpg',
    bgGradient: 'from-green-500 to-teal-400',
    icon: '🌸',
  },
  {
    slug: 'nepali',
    name: 'Nepali Escorts',
    tagline: 'Himalayan Grace and Natural Beauty',
    description: 'Nepali escorts known for their natural Himalayan beauty, gentle warmth, and genuine hospitality that makes every encounter feel deeply personal.',
    longDescription: 'Our Nepali escorts bring the legendary warmth and natural grace of the Himalayan nation to Mumbai. Celebrated for their gentle demeanour, natural beauty without excessive artifice, and genuine desire to please, Nepali companions create encounters that feel authentic and deeply personal rather than transactional. Whether for a quiet evening, an overnight stay, or a longer companionship arrangement, our Nepali escorts consistently receive the highest client satisfaction ratings.',
    features: ['Natural Himalayan beauty', 'Gentle & affectionate', 'Genuine warmth', 'Hindi & English speaking', 'Adaptable to client needs', 'Overnight available'],
    imageAlt: 'Nepali Escorts Mumbai – Himalayan Natural Beauty Companions',
    image: '/images/escort-types/nepali.jpg',
    bgGradient: 'from-emerald-500 to-cyan-400',
    icon: '🏔️',
  },
  {
    slug: 'punjabi',
    name: 'Punjabi Escorts',
    tagline: 'The Vibrant Energy of Punjab\'s Finest',
    description: 'Punjabi escorts celebrated for their vivacious personalities, curvaceous beauty, and the infectious joy de vivre that defines Punjab\'s culture.',
    longDescription: 'Punjabi companions are renowned across India for their boldness, sensuality, and the sheer joy they bring to every encounter. Our Punjabi escorts are full of life – expressive, confident, and passionately warm. With their typically striking features, impressive figures, and outgoing personalities, they bring an energy to companionship that is both thrilling and deeply satisfying. Fans of bhangra, great food, and lively conversation will find our Punjabi escorts irresistible.',
    features: ['Vivacious & energetic', 'Curvaceous physique', 'Outgoing personality', 'Punjabi & Hindi speaking', 'Fun & adventurous', 'Excellent in social settings'],
    imageAlt: 'Punjabi Escorts Mumbai – Vibrant North Indian Companions',
    image: '/images/escort-types/punjabi.jpg',
    bgGradient: 'from-orange-500 to-yellow-400',
    icon: '🌻',
  },
  {
    slug: 'north-indian',
    name: 'North Indian Escorts',
    tagline: 'Classic Indian Beauty from the Heartland',
    description: 'North Indian escorts embodying the timeless beauty, grace, and cultural richness of Uttar Pradesh, Rajasthan, Haryana, and beyond.',
    longDescription: 'North India is home to some of the subcontinent\'s most celebrated beauties – from the fair-skinned maidens of the Gangetic plains to the dramatic features of Rajasthan\'s desert princesses. Our North Indian escorts encompass this incredible diversity, offering everything from the refined elegance of Lucknow\'s nawabi culture to the bold sensuality of Delhi\'s cosmopolitan scene. All our North Indian companions are fluent in Hindi and English, making communication effortless and enjoyable.',
    features: ['Classic North Indian beauty', 'Diverse regional origins', 'Hindi & English fluent', 'Well-mannered & educated', 'Wide age range available', 'Hotel & residence visits'],
    imageAlt: 'North Indian Escorts Mumbai – Classic Indian Beauty Companions',
    image: '/images/escort-types/north-indian.jpg',
    bgGradient: 'from-red-500 to-orange-400',
    icon: '🌺',
  },
  {
    slug: 'girlfriend',
    name: 'Girlfriend Experience',
    tagline: 'Authentic Romance, Genuine Connection',
    description: 'The Girlfriend Experience (GFE) is our most popular service – providing the emotional warmth, conversation, and romantic intimacy of a genuine relationship.',
    longDescription: 'The Girlfriend Experience (GFE) is designed for clients seeking something beyond physical companionship – they want to feel the genuine emotional warmth, care, and connection of being with a real partner. Our GFE escorts are skilled at creating this authentic relationship dynamic: they listen attentively, engage in meaningful conversation, show genuine affection, and make you feel truly special and desired. Whether for a single evening or an extended engagement, the GFE provides an experience that leaves clients feeling genuinely fulfilled.',
    features: ['Genuine emotional connection', 'Romantic dinner dates', 'Overnight & extended stays', 'Meaningful conversation', 'Public couple appearance', 'Travel companion'],
    imageAlt: 'Girlfriend Experience Mumbai – Romantic GFE Companions',
    image: '/images/escort-types/girlfriend.jpg',
    bgGradient: 'from-pink-500 to-red-400',
    icon: '❤️',
    badge: 'Fan Favourite',
  },
  {
    slug: 'housewife',
    name: 'Housewife Escorts',
    tagline: 'Mature Elegance and Real-World Warmth',
    description: 'Married housewives seeking private companionship arrangements – mature, experienced, and offering a uniquely authentic and deeply satisfying encounter.',
    longDescription: 'Our housewife companions offer an experience that many clients describe as uniquely satisfying – the encounter with a mature, experienced, and genuinely warm woman who approaches intimacy with the confidence and generosity of adulthood rather than the performance of professional youth. These discreet companions are available privately and maintain the utmost confidentiality. They offer a depth of experience, emotional intelligence, and authentic warmth that creates truly memorable encounters.',
    features: ['Mature & experienced', 'Genuinely warm personality', 'Absolute discretion', 'Real & authentic', 'Available afternoons', 'Incall primarily available'],
    imageAlt: 'Housewife Escorts Mumbai – Mature Experienced Companions',
    image: '/images/escort-types/housewife.jpg',
    bgGradient: 'from-purple-500 to-pink-400',
    icon: '🌷',
  },
  {
    slug: 'local',
    name: 'Local Escorts',
    tagline: 'Mumbai Girls – Familiar, Friendly, Fantastic',
    description: 'Local Mumbai escorts who know the city inside-out. Real Mumbai girls offering authentic, friendly, and affordable companionship with true local charm.',
    longDescription: 'Our local Mumbai escorts are the girl-next-door companions – real Mumbai women who understand the city\'s rhythms, speak its languages (Marathi, Hindi, English), and bring a genuine, unpretentious warmth to every encounter. Whether you\'re a long-term Mumbai resident seeking company or a visitor wanting to experience the city through local eyes, our Mumbai escorts offer affordable, authentic, and thoroughly enjoyable companionship without the formality of high-end packages.',
    features: ['Authentic local personality', 'Mumbai-born & raised', 'Affordable rates', 'Marathi, Hindi & English', 'Know all Mumbai areas', 'Casual & friendly vibe'],
    imageAlt: 'Local Escorts Mumbai – Authentic Mumbai Girl Companions',
    image: '/images/escort-types/local.jpg',
    bgGradient: 'from-yellow-500 to-orange-400',
    icon: '🏙️',
  },
]

export function getEscortTypeBySlug(slug: string): EscortType | undefined {
  return escortTypes.find(t => t.slug === slug)
}

export function getAllEscortTypeSlugs(): string[] {
  return escortTypes.map(t => t.slug)
}
