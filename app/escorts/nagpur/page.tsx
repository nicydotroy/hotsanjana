import type { Metadata } from 'next'
import { getMetroCityBySlug } from '@/data/metro-cities'
import MetroCityEscortPage, { generateMetroCityMetadata } from '@/components/MetroCityEscortPage'
import { notFound } from 'next/navigation'

const SLUG = 'nagpur'

export async function generateMetadata(): Promise<Metadata> {
  const city = getMetroCityBySlug(SLUG)
  if (!city) return { title: 'Not Found' }
  return generateMetroCityMetadata(city)
}

export default function NagpurEscortsPage() {
  const city = getMetroCityBySlug(SLUG)
  if (!city) notFound()
  return <MetroCityEscortPage city={city} />
}
