import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://hotsanjana.in/sitemap.xml',
    host: 'https://hotsanjana.in',
  }
}

// Note: LLMs.txt is served from public/llms.txt at https://hotsanjana.in/llms.txt
