#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const slugs = [
  // Railway & Transport Hubs
  'lucknow-junction',
  'charbagh-railway-station',
  'city-station',
  'transport-nagar',
  'amausi',
  'amausi-airport',
  // Central Historic Old City
  'kaiserbagh',
  'aminabad',
  'chowk',
  'nakhas',
  'lalbagh',
  'hazratganj',
  'hussainganj',
  'daliganj',
  // Administrative & Heritage
  'aishbagh',
  'charbagh',
  'alambagh',
  'rajendra-nagar',
  'telibagh',
  // West Lucknow
  'rajajipuram',
  'talkatora',
  'thakurganj',
  'balaganj',
  'dubagga',
  // South & Central Lucknow
  'krishna-nagar',
  'vikas-nagar',
  'jankipuram',
  'gomti-nagar',
  'manaknagar',
  'indira-nagar',
  // East & Suburban Lucknow
  'munshipulia',
  'vibhuti-khand',
  'vipul-khand',
  'viraj-khand',
  'nishatganj',
  // Premium Cantonment
  'cantonment',
  'mall-avenue',
  'ashok-marg',
  'sapru-marg',
  'butler-palace',
  // North & Outskirts
  'sitapur-road',
  'faizabad-road',
  'kursi-road',
  'deva-road',
  'chinhat',
  'matiyari',
  // Medical & Education Zone
  'sgpgi',
  'pgi-area',
  'lucknow-university',
  'engineering-college',
  // Modern Developments
  'golf-city',
  'ansal-api',
  'omaxe-city',
  'eldeco',
  'south-city',
  // Additional Key Areas
  'badshahnagar',
  'alamnagar',
  'arjunganj',
  'mohanlalganj',
]

const pageTemplate = (slug) => {
  const componentName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LucknowLocationPage, { generateLucknowLocationMetadata } from '@/components/LucknowLocationPage'
import { getLucknowLocationBySlug } from '@/data/lucknow-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getLucknowLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateLucknowLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getLucknowLocationBySlug(SLUG)
  if (!loc) notFound()
  return <LucknowLocationPage loc={loc} />
}
`
}

const appDir = path.join(__dirname, '..', 'app', 'escorts')

let created = 0
let skipped = 0

slugs.forEach((slug) => {
  const dir = path.join(appDir, slug)
  const file = path.join(dir, 'page.tsx')

  if (!fs.existsSync(file)) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(file, pageTemplate(slug))
    console.log(`Created: app/escorts/${slug}/page.tsx`)
    created++
  } else {
    skipped++
  }
})

console.log(`\nDone: ${created} created, ${skipped} skipped out of ${slugs.length} total.`)
