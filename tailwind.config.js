/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
        '15': 'repeat(auto-fill, minmax(150px, 1fr))'
      },
      colors: {
        jsTheme: "#0407e1",
        jsThemeGrad: "#0407e1",
        jsTag: "#9bb7d1",
        footer: "#dde7f0",
      },
      maxWidth: {
        '8xl': "1800px",
      },
      boxShadow: {
        'nav': "0 4px 2px -2px gray",
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}

