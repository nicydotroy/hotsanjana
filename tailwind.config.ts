import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff5f8',
          100: '#ffe5f0',
          200: '#ffcce0',
          300: '#ffaac8',
          400: '#ff77a8',
          500: '#ff1493',
          600: '#e0007a',
          700: '#bb0060',
          800: '#990050',
          900: '#7a0040',
        },
        rose: {
          light: '#FFB6C1',
          DEFAULT: '#FF69B4',
          dark: '#FF1493',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(255,20,147,0.92) 0%, rgba(255,105,180,0.92) 100%)',
        'card-gradient': 'linear-gradient(135deg, #fff5f8 0%, #ffe5f0 100%)',
        'footer-gradient': 'linear-gradient(135deg, #1a0a0f 0%, #2d0f1f 100%)',
        'section-gradient': 'linear-gradient(135deg, #fff0f5 0%, #ffe8f2 50%, #fff5f8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'pink': '0 4px 15px rgba(255, 20, 147, 0.3)',
        'pink-lg': '0 10px 40px rgba(255, 20, 147, 0.25)',
        'card': '0 8px 32px rgba(255, 20, 147, 0.12)',
        'card-hover': '0 20px 60px rgba(255, 20, 147, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
