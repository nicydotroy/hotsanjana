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

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  schema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {subtitle && (
              <p className="text-gray-400 text-lg">{subtitle}</p>
            )}
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border transition-colors"
                style={{
                  background: 'linear-gradient(135deg, #120500, #1a0800)',
                  borderColor: openIndex === index ? 'rgba(220, 0, 0, 0.5)' : 'rgba(139, 0, 0, 0.25)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-white text-base pr-4 group-hover:text-orange-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: openIndex === index ? 'linear-gradient(135deg, #8b0000, #dc0000)' : 'rgba(139, 0, 0, 0.2)',
                      color: openIndex === index ? '#ffffff' : '#ff4500',
                    }}
                  >
                    {openIndex === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-red-900/30 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
