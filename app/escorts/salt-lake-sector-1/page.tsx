import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import KolkataLocationPage, { generateKolkataLocationMetadata } from '@/components/KolkataLocationPage'
import { getKolkataLocationBySlug } from '@/data/kolkata-locations'

const SLUG = 'salt-lake-sector-1'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateKolkataLocationMetadata(loc)
}

export default function SaltLakeSector1EscortsPage() {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) notFound()
  return <KolkataLocationPage loc={loc} />
}
