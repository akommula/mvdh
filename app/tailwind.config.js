module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        compact: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
