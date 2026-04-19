import type { Metadata } from 'next'
import { getMetroCityBySlug } from '@/data/metro-cities'
import MetroCityEscortPage, { generateMetroCityMetadata } from '@/components/MetroCityEscortPage'
import { notFound } from 'next/navigation'

const SLUG = 'indore'

export async function generateMetadata(): Promise<Metadata> {
  const city = getMetroCityBySlug(SLUG)
  if (!city) return { title: 'Not Found' }
  return generateMetroCityMetadata(city)
}

export default function IndoreEscortsPage() {
  const city = getMetroCityBySlug(SLUG)
  if (!city) notFound()
  return <MetroCityEscortPage city={city} />
}
