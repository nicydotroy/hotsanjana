import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://hotsanjana.in${item.href}` }),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb navigation"
        className="backdrop-blur-sm border-b py-3"
        style={{
          background: 'rgba(10, 0, 0, 0.90)',
          borderColor: 'rgba(139, 0, 0, 0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 flex-wrap text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight size={14} className="text-red-800 flex-shrink-0" />
                )}
                {index === 0 && (
                  <Home size={14} className="text-red-500 flex-shrink-0" />
                )}
                {item.href && index < allItems.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-red-400 hover:text-orange-400 hover:underline font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-300 font-semibold">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
