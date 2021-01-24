export default {
  target: 'static',
  components: true,
  modules: ['@nuxt/content'],
  head: {
    titleTemplate: '%s Hola Belda',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap' },
    ]
  },
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
  },
}
