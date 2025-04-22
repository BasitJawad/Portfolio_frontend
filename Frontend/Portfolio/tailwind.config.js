/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem', // Adjust as needed
              fontWeight: '700',
              color: '#ffffff',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              color: '#ffffff',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff',
            },
            p: {
              fontSize: '1rem',
              color: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    ],
};