#!/usr/bin/env node
// scripts/generate-indore-pages.js
// Generates individual static page files for every Indore location.
// Run: node scripts/generate-indore-pages.js

const fs = require('fs')
const path = require('path')

const slugs = [
  // Indore Old City
  'rajwada',
  'juni-indore',
  'malharganj',
  'chhawani',
  'patnipura',
  'gpo-square',
  // Indore City Centre
  'indore-junction',
  'palasia',
  'geeta-bhawan',
  'regal-square',
  'bapat-square',
  'lig-square',
  'mig-square',
  'high-court-indore',
  'collector-office-indore',
  // North Indore / Vijay Nagar
  'indore-vijay-nagar',
  'satya-sai-square',
  'bombay-hospital',
  'mahalaxmi-nagar',
  'nipania',
  'bengali-square',
  'scheme-78',
  'dewas-naka',
  'lasudia-mori',
  'radisson-square',
  'silicon-city',
  // East Indore / IT Corridor
  'super-corridor',
  'tcs-square',
  'mr-10',
  'robot-square',
  'scheme-140',
  'scheme-94',
  // South Indore / AB Road
  'sapna-sangeeta',
  'tower-square',
  'agrasen-square',
  'bhawarkuan',
  'bhawarkuan-square',
  'khandwa-road',
  'my-hospital',
  'choithram-square',
  'ab-road',
  // West Indore
  'pardesipura',
  'sanwer-road',
  'indore-industrial-area',
  'scheme-54',
  'scheme-74',
  // Central Indore Colonies
  'indore-rajendra-nagar',
  'rajendra-nagar-square',
  'lakshmibai-nagar',
  'laxmibai-nagar-yard',
  'saifee-nagar',
  'indore-navlakha',
  'navlakha-bus-stand',
  'sarwate-bus-stand',
  // South Indore Residential
  'annapurna-road',
  'sudama-nagar',
  'usha-nagar',
  'teen-imli',
  'teen-puliya',
  'pipliyahana',
  // East Indore
  'khajrana',
  'musakhedi',
  'kalani-nagar',
  // West Indore Residential
  'indore-azad-nagar',
  'indore-gandhi-nagar',
  'indore-banganga',
  'indore-nanda-nagar',
  // Civic / Transport
  'indore-airport',
  'bypass-road-indore',
  'ring-road-indore',
  'mr-9',
  // Rau / Pithampur
  'rau',
  'rau-circle',
  'rau-pithampur-road',
  'manglia-gaon',
  'pithampur',
  // Mhow & Beyond
  'mhow',
  'dr-ambedkar-nagar-mhow',
  'patalpani',
  'kalakund',
]

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
import IndoreLocationPage, { generateIndoreLocationMetadata } from '@/components/IndoreLocationPage'
import { getIndoreLocationBySlug } from '@/data/indore-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getIndoreLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateIndoreLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getIndoreLocationBySlug(SLUG)
  if (!loc) notFound()
  return <IndoreLocationPage loc={loc} />
}
`

  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(file, content, 'utf8')
  console.log(`✅ create ${slug}`)
  created++
}

console.log(`\nDone. Created: ${created}, Skipped: ${skipped}, Total slugs: ${slugs.length}`)
