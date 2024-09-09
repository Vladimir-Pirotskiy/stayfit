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
        primary: '#348D73',
        secondary: '#4CAF91',
        background: '#1C201F',
        foreground: '#0E100F',
        neutralGray: '#242827',
      },
    },
  },
  plugins: [],
}
export default config
