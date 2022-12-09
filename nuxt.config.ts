// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Shop',
      meta: [
        { name: 'description', content: 'About Nuxt.js' }
      ]
    }
  }
})
