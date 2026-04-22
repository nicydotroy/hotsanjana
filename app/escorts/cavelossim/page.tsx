import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GoaLocationPage, { generateGoaLocationMetadata } from '@/components/GoaLocationPage'
import { getGoaLocationBySlug } from '@/data/goa-locations'

const SLUG = 'cavelossim'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getGoaLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateGoaLocationMetadata(loc)
}

export default function Cavelossim() {
  const loc = getGoaLocationBySlug(SLUG)
  if (!loc) notFound()
  return <GoaLocationPage loc={loc} />
}
