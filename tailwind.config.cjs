import typographyPlugin from '@tailwindcss/typography';
import tailwindcssForms from '@tailwindcss/forms';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        'haeder-text': 'var(--header-text)',
        'haeder-bg': 'var(--header-bg)',
        'b-color': 'var(--border-color)',
        'time-color': 'var(--time-color)',
        text: 'var(--text)',
        title: 'var(--title)',
        'footer-bg': 'var(--footer-bg)',
        'main-bg': 'var(--main)'
      },
      // fontFamily: {
      //   sans: [
      //     "var(--aw-font-sans, ui-sans-serif)",
      //     ...defaultTheme.fontFamily.sans,
      //   ],
      //   serif: [
      //     "var(--aw-font-serif, ui-serif)",
      //     ...defaultTheme.fontFamily.serif,
      //   ],
      //   heading: [
      //     "var(--aw-font-heading, ui-sans-serif)",
      //     ...defaultTheme.fontFamily.sans,
      //   ],
      // },
    },
  },
  plugins: [typographyPlugin, tailwindcssForms],
  darkMode: 'class',
};
