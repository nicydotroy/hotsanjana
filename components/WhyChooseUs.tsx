import { features } from '@/data/services'

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 section-fire-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-3">
            Our Commitment
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Why Choose{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hot Sanjana?
            </span>
          </h2>
          <div className="fire-divider max-w-sm mx-auto mb-6 opacity-60" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mumbai&apos;s most trusted escort service with a decade of excellence and thousands of satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-7 text-center border transition-all duration-300 hover:-translate-y-2 hover:border-red-600/60 cursor-default"
              style={{
                background: 'linear-gradient(135deg, #120500, #1a0800)',
                borderColor: 'rgba(139, 0, 0, 0.3)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              {/* Fire glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(220,0,0,0.1) 0%, transparent 70%)' }}
              />

              <div className="relative">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.icon}
                </div>

                <div className="mb-3">
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #ff4500, #ffd700)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {feature.stat}
                  </span>
                  <p className="text-xs text-gray-600 mt-0.5">{feature.statLabel}</p>
                </div>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
