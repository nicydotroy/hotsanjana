import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import KolkataLocationPage, { generateKolkataLocationMetadata } from '@/components/KolkataLocationPage'
import { getKolkataLocationBySlug } from '@/data/kolkata-locations'

const SLUG = 'masterda-surya-sen'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateKolkataLocationMetadata(loc)
}

export default function MasterdaSuryaSenEscortsPage() {
  const loc = getKolkataLocationBySlug(SLUG)
  if (!loc) notFound()
  return <KolkataLocationPage loc={loc} />
}
