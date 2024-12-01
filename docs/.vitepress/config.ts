import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Tailwind Rounded Out",
  description: "A Tailwind CSS plugin for outer-rounded corners with background inheritance",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Configuration', link: '/guide/configuration' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Basic Usage', link: '/examples/' },
          { text: 'Size Variants', link: '/examples/sizes' },
          { text: 'Directional Variants', link: '/examples/directions' },
          { text: 'Complex Examples', link: '/examples/complex' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/tailwind-rounded-out' }
    ]
  }
})