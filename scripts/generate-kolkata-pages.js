const fs = require('fs')
const path = require('path')

const slugs = [
  // Kolkata Rail Hubs
  'howrah-junction', 'sealdah', 'chitpur', 'santragachi', 'shalimar', 'dum-dum-junction',
  // Central Kolkata
  'maidan', 'park-street', 'esplanade', 'chandni-chowk', 'central-metro', 'mg-road',
  'rabindra-sadan', 'netaji-bhavan',
  // North Kolkata
  'girish-park', 'shobhabazar-sutanuti', 'shyambazar', 'belgachia', 'baranagar',
  'dakshineswar', 'noapara', 'dum-dum-metro',
  // South Kolkata
  'ballygunge', 'park-circus', 'gariahat', 'ballygunge-phari', 'rashbehari', 'kalighat',
  'jadavpur', 'dhakuria', 'golpark', 'tollygunge', 'tollygunge-metro',
  'mahanayak-uttam-kumar', 'rabindra-sarobar', 'netaji', 'masterda-surya-sen',
  'shahid-khudiram', 'kavi-nazrul', 'gitanjali', 'kavi-subhash',
  // South-West Kolkata
  'majerhat', 'new-alipore', 'brace-bridge', 'garden-reach', 'budge-budge',
  // Salt Lake IT Corridor
  'bidhannagar-road', 'salt-lake-sector-1', 'salt-lake-sector-2', 'salt-lake-sector-3',
  'karunamoyee', 'central-park', 'city-centre-1', 'city-centre-2',
  'sector-v', 'technopolis', 'salt-lake-stadium',
  // New Town / Rajarhat
  'rajarhat', 'new-town', 'nicco-park', 'baguiati', 'teghoria', 'kaikhali',
  // North Suburban
  'dum-dum-cantonment', 'barasat', 'barrackpore', 'naihati', 'kanchrapara',
  // East Kolkata
  'em-bypass', 'science-city', 'ruby-crossing', 'mukundapur', 'anandapur', 'kasba',
  // Metro East-West Line
  'phoolbagan', 'sealdah-metro', 'rabindra-sadan-metro',
]

function slugToComponentName(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('') + 'EscortsPage'
}

const outputDir = path.join(__dirname, '..', 'app', 'escorts')

let created = 0
let skipped = 0

for (const slug of slugs) {
  const dir = path.join(outputDir, slug)
  const file = path.join(dir, 'page.tsx')

  if (fs.existsSync(file)) {
    // Check if it's already a Kolkata page
    const content = fs.readFileSync(file, 'utf-8')
    if (content.includes('KolkataLocationPage')) {
      skipped++
      continue
    }
    // Existing non-Kolkata page – skip to avoid overwriting
    console.log(`SKIP (existing, non-Kolkata): ${slug}`)
    skipped++
    continue
  }

  fs.mkdirSync(dir, { recursive: true })

  const componentName = slugToComponentName(slug)

  const content = `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import KolkataLocationPage, { generateKolkataLocationMetadata } from '@/components/KolkataLocationPage'
import { getKolkataLocationBySlug } from '@/data/kolkata-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateKolkataLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) notFound()
  return <KolkataLocationPage loc={loc} />
}
`

  fs.writeFileSync(file, content, 'utf-8')
  created++
  console.log(`Created: app/escorts/${slug}/page.tsx`)
}

console.log(`\nDone: ${created} created, ${skipped} skipped out of ${slugs.length} total.`)
