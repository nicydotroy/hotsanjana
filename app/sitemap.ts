import { MetadataRoute } from 'next'
import { getAllLocationSlugs } from '@/data/locations'
import { getAllEscortTypeSlugs } from '@/data/escort-types'
import { getAllPatnaLocationSlugs } from '@/data/patna-locations'

const BASE_URL = 'https://hotsanjana.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const locationSlugs = getAllLocationSlugs()
  const typeSlugs = getAllEscortTypeSlugs()
  const patnaLocationSlugs = getAllPatnaLocationSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/location`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/types`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ]

  const escortPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/escorts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const patnaEscortPages: MetadataRoute.Sitemap = patnaLocationSlugs.map((slug) => ({
    url: `${BASE_URL}/escorts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const callGirlsPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/call-girls/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const typePages: MetadataRoute.Sitemap = typeSlugs.map((slug) => ({
    url: `${BASE_URL}/escort-types/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...escortPages, ...patnaEscortPages, ...callGirlsPages, ...typePages]
}
