import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PuneLocationPage, { generatePuneLocationMetadata } from '@/components/PuneLocationPage'
import { getPuneLocationBySlug } from '@/data/pune-locations'

const SLUG = 'kanhe'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePuneLocationMetadata(loc)
}

export default function KanheEscortsPage() {
  const loc = getPuneLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PuneLocationPage loc={loc} />
}
