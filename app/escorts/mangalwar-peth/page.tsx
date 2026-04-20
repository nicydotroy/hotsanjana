import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PuneLocationPage, { generatePuneLocationMetadata } from '@/components/PuneLocationPage'
import { getPuneLocationBySlug } from '@/data/pune-locations'

const SLUG = 'mangalwar-peth'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePuneLocationMetadata(loc)
}

export default function MangalwarPethEscortsPage() {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PuneLocationPage loc={loc} />
}
