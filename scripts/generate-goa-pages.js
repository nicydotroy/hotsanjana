#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const slugs = [
  // Railway & Transport Hubs
  'madgaon-junction',
  'vasco-da-gama',
  'dabolim-airport',
  'thivim-railway',
  'karmali-railway',
  // North Goa Beaches
  'calangute',
  'baga',
  'anjuna',
  'vagator',
  'chapora',
  'morjim',
  'ashwem',
  'mandrem',
  'arambol',
  'querim',
  'candolim',
  'aguada-fort',
  // North Goa Central
  'mapusa',
  'siolim',
  'assagao',
  'parra',
  // Panaji & Old City
  'panaji',
  'old-goa',
  'dona-paula',
  'miramar',
  'porvorim',
  'alto-porvorim',
  // Central Goa Beaches
  'colva',
  'benaulim',
  'varca',
  'cavelossim',
  'betalbatim',
  // South Goa Beaches
  'canacona',
  'agonda',
  'patnem',
  'cola-beach',
  'rajbagh',
  'bogmalo',
  // South Goa Inland
  'quepem',
  'chandor',
  'ponda',
  'loutolim',
  // Eastern Goa Ghats
  'farmagudi',
  'priol',
]

const pageTemplate = (slug) => {
  const componentName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GoaLocationPage, { generateGoaLocationMetadata } from '@/components/GoaLocationPage'
import { getGoaLocationBySlug } from '@/data/goa-locations'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getGoaLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateGoaLocationMetadata(loc)
}

export default function ${componentName}() {
  const loc = getGoaLocationBySlug(SLUG)
  if (!loc) notFound()
  return <GoaLocationPage loc={loc} />
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
