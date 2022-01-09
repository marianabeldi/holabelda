export default {
  target: 'static',
  components: true,
  modules: ['@nuxt/content'],
  head: {
    title: 'Hola Belda',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'Mariana Beldi Website. Portfolio, blog, talks, about SVG, code and design.',
        name: 'Mariana Beldi Website. Portfolio, blog, talks, about SVG, code and design.',
        content: 'Blog, talks and free tools about things I like related to design, code, illustration, and SVG.',
        hid: 'og:type', property: 'og:type', content: 'website',
        hid: 'og:url', property: 'og:url', content: 'https://holasvg.com/',
        hid: 'og:title', property: 'og:title', content: 'Hola Belda',
        hid: 'og:description', property: 'og:description', content: 'Blog, talks and free tools about things I like related to design, code, illustration, and SVG.',
        hid: 'og:image', property: 'og:image', content: '/meta-img.jpg',
        hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image',
        hid: 'twitter:url', property: 'twitter:url', content: 'https://holasvg.com/',
        hid: 'twitter:title', property: 'twitter:title', content: 'Hola Belda',
        hid: 'twitter:description', property: 'twitter:description', content: 'Blog, talks and free tools about things I like related to design, code, illustration, and SVG.',
        hid: 'twitter:image', property: 'twitter:image', content: '/meta-img.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap' },
    ]
  },
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-83697602-1',
      autoTracking: {
        pageviewTemplate: route => {
            return {
                page: route.path,
                title: window.document.title,
                location: window.location.href,
            };
        }
      }
    }]
  ]
}
