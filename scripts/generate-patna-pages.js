#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const slugs = [
  // Railway & Transport Hubs
  'patna-junction',
  'rajendra-nagar-terminal',
  'pataliputra-junction',
  'sonpur-junction',
  'hajipur-junction',
  // Central Patna (Administrative & Civic)
  'patna-high-court',
  'secretariat',
  'gandhi-maidan',
  // Historic Old City
  'patna-city',
  'golghar',
  'kadamkuan',
  // North Patna
  'danapur',
  'danapur-cantonment',
  'digha',
  // East Patna
  'phulwari',
  'beur',
  'kurji',
  // South Patna
  'boring-road',
  'patliputra-colony',
  'bailey-road',
  'boring-canal-road',
  // West Patna
  'rajendra-path',
  'ashok-rajpath',
  // Health & Education Zone
  'pmch',
  'aiims-patna',
  'igims',
  'patna-university',
  // Airport & South Suburbs
  'patna-airport',
  'masaurhi',
  'bihta',
  // East Suburbs
  'khagaul',
  'taregna',
  'fatwah',
  // North Suburbs
  'bakhtiyarpur',
  'barh',
  'mokama',
  // West Suburbs
  'sheikhpura',
  'ashiana-nagar',
  'anisabad',
]

const pageTemplate = (slug) => {
  const componentName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PatnaLocationPage, { generatePatnaLocationMetadata } from '@/components/PatnaLocationPage'
import { getPatnaLocationBySlug } from '@/data/patna-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePatnaLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PatnaLocationPage loc={loc} />
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
