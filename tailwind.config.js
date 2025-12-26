/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FCEEEF',
          100: '#F9DEE1',
          200: '#F4C2C8',
          300: '#EEA3AC',
          400: '#E56F7C',
          500: '#D72539',
          600: '#BD2132',
          700: '#A31C2B',
          800: '#851723',
          900: '#67121B',
        },
        neutral: {
          0: '#FAF9F8',
          50: '#F6F5F4',
          100: '#EFEDEA',
          200: '#E6E2DE',
          300: '#D5D0CB',
          400: '#B8B1AB',
          500: '#8F8882',
          600: '#6F6A65',
          700: '#4F4B47',
          800: '#2F2D2B',
          900: '#222222',
        },
        success: '#16A34A',
        warning: '#F59E0B',
        info: '#2563EB',
        danger: '#D72539',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Inclusive Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}