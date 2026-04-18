import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hotsanjana.in',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Redirect old .html escort pages to new clean URLs
      { source: '/escorts-mumbai.html', destination: '/escorts/mumbai', permanent: true },
      { source: '/escorts-andheri.html', destination: '/escorts/andheri', permanent: true },
      { source: '/escorts-bandra.html', destination: '/escorts/bandra', permanent: true },
      { source: '/escorts-juhu.html', destination: '/escorts/juhu', permanent: true },
      { source: '/escorts-thane.html', destination: '/escorts/thane', permanent: true },
      { source: '/escorts-navi-mumbai.html', destination: '/escorts/navi-mumbai', permanent: true },
      { source: '/escorts-powai.html', destination: '/escorts/powai', permanent: true },
      { source: '/escorts-colaba.html', destination: '/escorts/colaba', permanent: true },
      { source: '/escorts-borivali.html', destination: '/escorts/borivali', permanent: true },
      { source: '/escorts-malad.html', destination: '/escorts/malad', permanent: true },
      { source: '/escorts-kandivali.html', destination: '/escorts/kandivali', permanent: true },
      { source: '/escorts-goregaon.html', destination: '/escorts/goregaon', permanent: true },
      { source: '/escorts-kurla.html', destination: '/escorts/kurla', permanent: true },
      { source: '/escorts-dadar.html', destination: '/escorts/dadar', permanent: true },
      { source: '/escorts-worli.html', destination: '/escorts/worli', permanent: true },
      { source: '/escorts-neral.html', destination: '/escorts/neral', permanent: true },
      { source: '/escorts-kalyan.html', destination: '/escorts/kalyan', permanent: true },
      { source: '/escorts-panvel.html', destination: '/escorts/panvel', permanent: true },
      { source: '/escorts-vasai.html', destination: '/escorts/vasai', permanent: true },
      { source: '/escorts-virar.html', destination: '/escorts/virar', permanent: true },
      // Redirect old call-girls pages
      { source: '/call-girls-in-mumbai.html', destination: '/call-girls/mumbai', permanent: true },
      { source: '/call-girls-in-andheri.html', destination: '/call-girls/andheri', permanent: true },
      { source: '/call-girls-in-bandra.html', destination: '/call-girls/bandra', permanent: true },
      { source: '/call-girls-in-thane.html', destination: '/call-girls/thane', permanent: true },
      // Old static pages
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/location.html', destination: '/location', permanent: true },
      { source: '/types.html', destination: '/types', permanent: true },
      // Old escort type pages
      { source: '/vip-escorts-mumbai.html', destination: '/escort-types/vip', permanent: true },
      { source: '/russian-escorts-mumbai.html', destination: '/escort-types/russian', permanent: true },
      { source: '/bengali-escorts-mumbai.html', destination: '/escort-types/bengali', permanent: true },
      { source: '/nepali-escorts-mumbai.html', destination: '/escort-types/nepali', permanent: true },
      { source: '/punjabi-escorts-mumbai.html', destination: '/escort-types/punjabi', permanent: true },
      { source: '/north-indian-escorts-mumbai.html', destination: '/escort-types/north-indian', permanent: true },
      { source: '/girlfriend-escorts-mumbai.html', destination: '/escort-types/girlfriend', permanent: true },
      { source: '/house-wife-mumbai.html', destination: '/escort-types/housewife', permanent: true },
      { source: '/local-escorts-mumbai.html', destination: '/escort-types/local', permanent: true },
    ]
  },
}

export default nextConfig
