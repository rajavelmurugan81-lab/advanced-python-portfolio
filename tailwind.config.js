/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#B9470B',
        'bright-orange': '#FF650A',
        'amber-orange': '#F47A0B',
        'deep-brown': '#28150D',
        'charcoal': '#241A17',
        'warm-ivory': '#FFF9F1',
        'warm-cream': '#FAF6F0',
        'warm-card': '#FFFFFF',
        'warm-border': '#EFE6DC',
        'warm-border-dark': '#3D251C',
        'muted-text': '#796E67',
        'dark-bg': '#190E09',
        'dark-surface': '#23150F',
      },
      fontFamily: {
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        display: ['"Barlow Condensed"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(40, 21, 13, 0.05), 0 1px 2px rgba(40, 21, 13, 0.03)',
        'warm-md': '0 4px 16px -2px rgba(40, 21, 13, 0.06), 0 2px 6px -1px rgba(40, 21, 13, 0.04)',
        'warm-lg': '0 12px 28px -4px rgba(40, 21, 13, 0.08), 0 4px 12px -2px rgba(40, 21, 13, 0.04)',
        'orange-glow': '0 0 25px rgba(255, 101, 10, 0.35)',
        'hero-glow': '0 20px 60px rgba(185, 71, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
