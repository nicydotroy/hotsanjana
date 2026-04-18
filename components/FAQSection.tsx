'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
  schema?: boolean
}

function FaqColumn({
  items,
  offset,
  openIndex,
  onToggle,
}: {
  items: FAQ[]
  offset: number
  openIndex: number | null
  onToggle: (i: number) => void
}) {
  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const idx = i + offset
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden border transition-colors"
            style={{
              background: 'linear-gradient(135deg, #120500, #1a0800)',
              borderColor: isOpen ? 'rgba(220, 0, 0, 0.5)' : 'rgba(139, 0, 0, 0.25)',
            }}
          >
            <button
              onClick={() => onToggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-white text-sm sm:text-base pr-3 group-hover:text-orange-300 transition-colors leading-snug">
                {faq.question}
              </span>
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: isOpen ? 'linear-gradient(135deg, #8b0000, #dc0000)' : 'rgba(139, 0, 0, 0.2)',
                  color: isOpen ? '#ffffff' : '#ff4500',
                }}
              >
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-4 pb-4 text-gray-400 text-sm leading-relaxed border-t border-red-900/30 pt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  schema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <section className="py-16 lg:py-20 section-fire-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span
                style={{
                  background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {title}
              </span>
            </h2>
            {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <FaqColumn items={faqs.slice(0, 8)} offset={0} openIndex={openIndex} onToggle={toggle} />
            <div className="mt-3 lg:mt-0">
              <FaqColumn items={faqs.slice(8, 16)} offset={8} openIndex={openIndex} onToggle={toggle} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
