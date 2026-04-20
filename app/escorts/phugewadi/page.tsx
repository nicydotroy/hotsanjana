import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PuneLocationPage, { generatePuneLocationMetadata } from '@/components/PuneLocationPage'
import { getPuneLocationBySlug } from '@/data/pune-locations'

const SLUG = 'phugewadi'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePuneLocationMetadata(loc)
}

export default function PhugewadiEscortsPage() {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PuneLocationPage loc={loc} />
}
