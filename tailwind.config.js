module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Open Sans',
        ],
      },
      colors: {
        background: 'var(--color-background)',
        'background-secondary': 'var(--color-background-secondary)',
        header: 'var(--color-header)',
        footer: 'var(--color-footer)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-disabled': 'var(--color-primary-disabled)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'secondary-disabled': 'var(--color-secondary-disabled)',
        heading: 'var(--color-text-heading)',
        'heading-secondary': 'var(--color-text-heading-secondary)',
        body: 'var(--color-text-body)',
        'body-secondary': 'var(--color-text-body-secondary)',
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
