// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Random questions",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
    },
  },

  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/ui'],
  devtools: { enabled: false }
})
