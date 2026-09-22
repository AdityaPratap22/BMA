import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#F5F0E8',
          300: '#EBE4D8',
          400: '#DCD3C4',
        },
        terracotta: {
          50: '#FDF6F0',
          100: '#FAF0E6',
          200: '#F3D5C5',
          500: '#C86B3C',
          600: '#9A481B',
          700: '#793612',
          800: '#5C270B',
          900: '#431C07',
        },
        stone: {
          850: '#1F1D1A',
          900: '#1C1917',
        },
        brand: {
          bg: '#FDFBF7',
          card: '#F7F3ED',
          border: '#E7E0D6',
          primary: '#9A481B',
          primaryHover: '#793612',
          textDark: '#1C1917',
          textMuted: '#665E55',
          accentGreen: '#166534',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px 0 rgba(154, 72, 27, 0.04)',
        'warm-md': '0 4px 16px 0 rgba(154, 72, 27, 0.08)',
        'warm-lg': '0 12px 32px 0 rgba(154, 72, 27, 0.12)',
      }
    },
  },
  plugins: [],
};

export default config;
