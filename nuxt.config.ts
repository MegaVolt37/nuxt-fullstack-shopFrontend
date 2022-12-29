// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:5000',
    },
  },
  css: ["@/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/global.scss" as *;',
        },
      },
    },
  },
  
  components: [
    '~/components',
    '~/components/Content',
    '~/components/Content/Badge',
    '~/components/Content/Header',
    '~/components/Content/Offer',
    '~/components/Content/Checkbox',
    '~/components/Content/Choiser',
    '~/components/Content/Rating',
    '~/components/Header',
    '~/components/ShopCart',
    '~/components/Home',
  ],
})
