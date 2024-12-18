import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Test-repo-documentation',
  description: 'Test repository documentation',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/test-repository/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Services', link: '/services' },
      { text: 'Contact me', link: '/contact-me' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 201.79 202.69"><path d="m200.9.45-101 200L.9.45" style="stroke-width:2px;stroke:#000;stroke-miterlimit:10"/><path d="M97.76 117.46 81.74 84.88l-36.02-5.31 26.14-25.25-6.05-35.77 32.17 16.97 32.28-16.79L124 54.46l26.01 25.39-36.05 5.12-16.2 32.49z" style="fill:#fff;stroke:#000;stroke-miterlimit:10"/></svg>',
        },
        link: 'https://javiramoslab.com',
        ariaLabel: 'JaviRamosLab web',
      },
      { icon: 'github', link: 'https://github.com/javiramoslab' },
      { icon: 'facebook', link: 'https://facebook.com/javiramoslab' },
      { icon: 'twitter', link: 'https://twitter.com/javiramoslab' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 20224-present Javier Ramos Nistal',
    },
  },
});

// If you want to selectively enable/disable prev/next links, you can use frontmatter.
