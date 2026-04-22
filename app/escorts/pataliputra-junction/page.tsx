import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PatnaLocationPage, { generatePatnaLocationMetadata } from '@/components/PatnaLocationPage'
import { getPatnaLocationBySlug } from '@/data/patna-locations'

const SLUG = 'pataliputra-junction'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePatnaLocationMetadata(loc)
}

export default function PataliputraJunction() {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PatnaLocationPage loc={loc} />
}
