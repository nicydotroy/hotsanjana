import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import IndoreLocationPage, { generateIndoreLocationMetadata } from '@/components/IndoreLocationPage'
import { getIndoreLocationBySlug } from '@/data/indore-locations'

const SLUG = 'saifee-nagar'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getIndoreLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generateIndoreLocationMetadata(loc)
}

export default function SaifeeNagarEscortsPage() {
  const loc = getIndoreLocationBySlug(SLUG)
  if (!loc) notFound()
  return <IndoreLocationPage loc={loc} />
}
