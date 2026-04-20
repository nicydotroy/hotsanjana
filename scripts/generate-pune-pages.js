#!/usr/bin/env node
// scripts/generate-pune-pages.js
// Generates individual static page files for every Pune location.
// Run: node scripts/generate-pune-pages.js

const fs = require('fs')
const path = require('path')

// ─── Slugs (must match data/pune-locations.ts exactly) ───────────────────────
const slugs = [
  // Pune City Centre
  'pune-junction',
  'shivajinagar',
  'deccan-gymkhana',
  'nal-stop',
  'garware-college',
  'ideal-colony',
  // Pune Old City
  'swargate',
  'mandai',
  'kasba-peth',
  'budhwar-peth',
  'mangalwar-peth',
  // Civic
  'pune-pmc',
  'civil-court-pune',
  // East Pune
  'bund-garden',
  'ruby-hall-clinic',
  'pune-railway-station-metro',
  'yerawada',
  'ramwadi',
  'vishrantwadi',
  'pune-airport',
  'phugewadi',
  'sant-tukaram-nagar',
  'nashik-phata',
  // Hadapsar / SE Pune
  'hadapsar',
  'phursungi',
  'manjari-budruk',
  'uruli-kanchan',
  'yawat',
  'kedgaon',
  'daund-junction',
  // North Pune
  'alandi-road',
  // PCMC
  'bhosari',
  'moshi',
  'pcmc',
  'pimpri',
  'chinchwad',
  'khadki',
  'dapodi',
  'kasarwadi',
  'kasarwadi-metro',
  'pimpri-metro',
  'chinchwad-metro',
  'akurdi',
  'nigdi',
  'nigdi-metro',
  'dehu-road',
  // Pune–Lonavala Corridor
  'begdewadi',
  'talegaon',
  'ghorawadi',
  'kanhe',
  'kamshet',
  'malavli',
  'lonavala',
  // West Pune
  'aundh',
  'baner',
  'balewadi',
  'wakad',
  'hinjewadi',
  'hinjewadi-phase-1',
  'hinjewadi-phase-2',
  'hinjewadi-phase-3',
  'range-hills',
  'pune-university',
  'kothrud',
  'karve-nagar',
  'warje',
  'bavdhan',
  'khadakwasla',
  'vanaz',
]

// Convert slug to a valid PascalCase component name
function slugToComponentName(slug) {
  return (
    slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('') + 'EscortsPage'
  )
}

const appDir = path.join(__dirname, '..', 'app', 'escorts')

let created = 0
let skipped = 0

for (const slug of slugs) {
  const dir = path.join(appDir, slug)
  const file = path.join(dir, 'page.tsx')

  if (fs.existsSync(file)) {
    console.log(`⏭  skip  ${slug}`)
    skipped++
    continue
  }

  const componentName = slugToComponentName(slug)

  const content = `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PuneLocationPage, { generatePuneLocationMetadata } from '@/components/PuneLocationPage'
import { getPuneLocationBySlug } from '@/data/pune-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePuneLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PuneLocationPage loc={loc} />
}
`

  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(file, content, 'utf8')
  console.log(`✅ create ${slug}`)
  created++
}

console.log(`\nDone. Created: ${created}, Skipped: ${skipped}, Total slugs: ${slugs.length}`)
