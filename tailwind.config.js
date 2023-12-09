/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)'
      },
      colors: {
        gray: {
          1000: '#09090a',
          900:'#121214',
          800: '#313137',
        },
        blue: {
          1000: '#37afeb'
        }
      },
      screens: {
        'mobile-p': {'max': '525px'},
        'mobile': {'max': '640px'},
      }

    },
  },
  plugins: [],
}
