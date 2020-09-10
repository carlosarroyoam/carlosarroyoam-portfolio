/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
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
      },
      borderRadius: {
        default: '0.125rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
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
