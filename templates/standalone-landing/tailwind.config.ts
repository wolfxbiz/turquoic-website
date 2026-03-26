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
        teal: {
          light: '#E0FAF8',
          mid: '#7FE8DC',
          strong: '#2DD4C0',
          accent: '#0EA5A0',
        },
        lime: '#C8E600',
        olive: '#556000',
        lavender: '#A78BFA',
        mint: '#7FFFD4',
        dark: '#1A1A1A',
        muted: '#555555',
      },
      borderRadius: {
        card: '28px',
        btn: '14px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E0FAF8 0%, #7FE8DC 50%, #2DD4C0 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(224,250,248,0.9) 0%, rgba(64,224,208,0.35) 100%)',
        'gradient-section': 'linear-gradient(135deg, #E0FAF8 0%, #2DD4C0 100%)',
      },
      fontFamily: {
        display: ['Brandon Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Brandon Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
