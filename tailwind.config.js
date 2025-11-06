/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          dark: '#141414',
          gray: '#2f2f2f'
        }
      },
      backgroundImage: {
        'netflix-gradient':
          'linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 75%)'
      }
    }
  },
  plugins: []
};
