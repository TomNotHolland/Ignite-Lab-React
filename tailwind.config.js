/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"], 
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
        colors: {
          green: {
            300: '#00B37E',
            500: '#00875F',
            700: '#015F43',
          },
          blue: {
            500: '#81D8F7',
          },
          orange: {
            500: '#FBA94C',
          },
          red: {
            500: '#F75A68',
          },
          gray: {
            100: '#E1E1E6',
            200: '#C4C4CC',
            300: '#8D8D99',
            500: '#323238',
            600: '#29292E',
            700: '#121214',
            900: '#09090A'
          }
        },
      animation: {
        'spin-slow': 'spin-slow 4.5s ease infinite',
        'spin': 'animate-spin 4.5s ease infinite',
        'pulse': 'animate-pulse 4.5s ease infinite'
      },
      keyframes: {
        'spin-slow': {
          '0%, 8.33%, 91.66%, 100%': { marginTop: '0;', marginLeft: '0;' },
          '16.66%, 25%, 33.33%': { marginTop: '0;', marginLeft: '2.125rem;' },
          '41.66%, 50%, 58.33%':{ marginTop: '2.125rem;', marginLeft: '2.125rem;' },
          '66.66%, 75%, 83.33%': { marginTop: '2.125rem;', marginLeft: '0;'}
          },
        'animate-spin': {
          '0%, 83.33%, 91.66%, 100%': { marginTop: '0;', marginLeft: '2.125rem;'},
          '8.33%, 16.66%, 25%': { marginTop: '2.125rem;', marginLeft: '2.125rem;'},
          '33.33%, 41.66%, 50%': { marginTop: '2.125rem;', marginLeft: '0;'},
          '58.33%, 66.66%, 75%':{ marginTop: '0;', marginLeft: '0;'}
        },
        'animate-pulse': {
          '0%, 8.33%, 16.66%, 100%': { marginTop: '2.125rem;', marginLeft: '0;'},
          '25%, 33.33%, 41.66%': { marginTop: '0;', marginLeft: '0;'},
          '50%, 58.33%, 66.66%': { marginTop: '0;', marginLeft: '2.125rem;'},
          '75%, 83.33%, 91.66%': { marginTop: '2.125rem;', marginLeft: '2.125rem;'}
        }
      },
    },
  plugins: [],
  }
}