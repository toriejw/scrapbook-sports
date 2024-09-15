import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scrapbook Sports",
  description: "Sports stories from your grandma's scrapbook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stories', link: '/stories' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Stories', link: '/stories' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/scrapbook.sports' }
    ], 

    footer: {
      copyright: "Scrapbook Sports © 2024",
    },
  },
  cleanUrls: true,
  sitemap: {
    hostname: "https://scrapbooksports.com"
  },
  appearance: false,
})
