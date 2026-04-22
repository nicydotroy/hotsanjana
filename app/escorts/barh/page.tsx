import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PatnaLocationPage, { generatePatnaLocationMetadata } from '@/components/PatnaLocationPage'
import { getPatnaLocationBySlug } from '@/data/patna-locations'

const SLUG = 'barh'

export async function generateMetadata(): Promise<Metadata> {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) return { title: 'Not Found' }
  return generatePatnaLocationMetadata(loc)
}

export default function Barh() {
  const loc = getPatnaLocationBySlug(SLUG)
  if (!loc) notFound()
  return <PatnaLocationPage loc={loc} />
}
