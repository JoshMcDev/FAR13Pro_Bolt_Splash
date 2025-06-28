/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0B0E17',
          900: '#101322',
          850: '#15192B',
          800: '#181C2F',
          700: '#23263A',
          600: '#2E3247',
          500: '#4B5563',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        purple: {
          500: '#3E047E',
          400: '#501C58',
        },
        magenta: {
          400: '#8E0F6D',
        },
        orange: {
          400: '#E08D49',
        },
        green: {
          500: '#23D893',
        },
        cyan: {
          400: '#00FFC8',
        },
        blue: {
          500: '#249BD9',
          400: '#3ABFF8',
        },
        teal: {
          400: '#4ECDC4',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'elev-1': '0 1px 2px rgba(0,0,0,0.20)',
        'elev-2': '0 2px 6px rgba(0,0,0,0.24)',
        'elev-4': '0 4px 12px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};