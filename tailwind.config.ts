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
        fire: {
          50:  '#fff8f0',
          100: '#ffecd6',
          200: '#ffd5a0',
          300: '#ffb55a',
          400: '#ff8c1a',
          500: '#ff6600',
          600: '#e64d00',
          700: '#cc3300',
          800: '#991a00',
          900: '#660a00',
        },
        crimson: {
          50:  '#fff0f0',
          100: '#ffd6d6',
          200: '#ffaaaa',
          300: '#ff6666',
          400: '#ff2222',
          500: '#dc0000',
          600: '#b30000',
          700: '#8b0000',
          800: '#660000',
          900: '#3d0000',
        },
        gold: {
          50:  '#fffdf0',
          100: '#fff9cc',
          200: '#fff099',
          300: '#ffe566',
          400: '#ffd700',
          500: '#e6c200',
          600: '#cc9900',
          700: '#a67700',
          800: '#7a5500',
          900: '#4d3300',
        },
        dark: {
          50:  '#3a3a3a',
          100: '#2a2a2a',
          200: '#1f1f1f',
          300: '#161616',
          400: '#111111',
          500: '#0d0d0d',
          600: '#0a0a0a',
          700: '#070707',
          800: '#040404',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #2d0000 100%)',
        'fire-gradient': 'linear-gradient(135deg, #8b0000 0%, #cc3300 40%, #ff6600 100%)',
        'gold-gradient': 'linear-gradient(135deg, #a67700 0%, #ffd700 50%, #ff8c1a 100%)',
        'card-gradient': 'linear-gradient(135deg, #1a0a00 0%, #1f0f0f 100%)',
        'footer-gradient': 'linear-gradient(135deg, #050505 0%, #0f0500 100%)',
        'section-gradient': 'linear-gradient(135deg, #0f0000 0%, #1a0500 50%, #0f0000 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-in-out',
        'slide-up':   'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 3s ease-in-out infinite',
        'flicker':    'flicker 2s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.85' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 10px rgba(220,0,0,0.4), 0 0 30px rgba(220,0,0,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255,102,0,0.6), 0 0 60px rgba(255,102,0,0.3)' },
        },
      },
      boxShadow: {
        'fire':      '0 4px 15px rgba(220, 0, 0, 0.5)',
        'fire-lg':   '0 10px 40px rgba(220, 0, 0, 0.4)',
        'gold':      '0 4px 15px rgba(255, 215, 0, 0.4)',
        'gold-lg':   '0 10px 40px rgba(255, 215, 0, 0.3)',
        'card':      '0 8px 32px rgba(220, 0, 0, 0.15)',
        'card-hover':'0 20px 60px rgba(255, 102, 0, 0.3)',
        'glow-red':  '0 0 30px rgba(220, 0, 0, 0.5), 0 0 60px rgba(220, 0, 0, 0.2)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
