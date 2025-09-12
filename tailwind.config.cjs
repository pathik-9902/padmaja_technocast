/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#111111',
        'brand-dark-gray': '#374151',
        'brand-gray': '#4B5563',
        'brand-light-gray': '#E5E5E5',
        'brand-lighter-gray': '#F5F5F5',
        'brand-white': '#FFFFFF',
        'brand-red': '#DC2626',
        'brand-dark': '#111111',
        'brand-light': '#F5F5F5',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(-15px)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
