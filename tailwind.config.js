/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin)'],
        serif: ['var(--font-source-serif-pro)'],
      },
      colors: {
        uPrimary: '#4A4870',
        uFontColor: '#586171',
        uBgColor: '#F9F9FE',
        uBlue: '#4A4870',
        uRed: '#FF4B60',
        uWhite: '#FFFFFF',
        uGray: '#9A9FA9',
        uTwitter: '#1DA1F1',
        uFacebook: '#165BEA',
        uInstargram: '#EF00A1',
        uVelog: '#1EC997',
        uYellow: '#FAC469',
        uSkyBlue: '#65EBE7',
      },
    },
  },
  plugins: [],
};
