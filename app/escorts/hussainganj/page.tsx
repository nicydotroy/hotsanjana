import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LucknowLocationPage, { generateLucknowLocationMetadata } from '@/components/LucknowLocationPage'
import { getLucknowLocationBySlug } from '@/data/lucknow-locations'

const SLUG = 'hussainganj'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getLucknowLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateLucknowLocationMetadata(loc)
}

export default function Hussainganj() {
  const loc = getLucknowLocationBySlug(SLUG)
  if (!loc) notFound()
  return <LucknowLocationPage loc={loc} />
}
