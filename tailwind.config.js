/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'notion-bg': 'var(--notion-bg)',
        'notion-text': 'var(--notion-text)',
        'notion-gray': 'var(--notion-gray)',
        'notion-brown': 'var(--notion-brown)',
        'notion-orange': 'var(--notion-orange)',
        'notion-yellow': 'var(--notion-yellow)',
        'notion-green': 'var(--notion-green)',
        'notion-blue': 'var(--notion-blue)',
        'notion-purple': 'var(--notion-purple)',
        'notion-pink': 'var(--notion-pink)',
        'notion-red': 'var(--notion-red)',
      },
    },
  },
  plugins: [],
} 