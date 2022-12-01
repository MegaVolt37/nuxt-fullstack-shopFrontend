// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // ...
    '@nuxtjs-alt/auth',
    '@nuxtjs-alt/http',
    '@nuxtjs-alt/proxy',
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
      baseURL: process.env.BASE_URL || 'http://localhost:5000/',
    },
  },
  css: ["@/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";',
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
    '~/components/Content/Rating',
    '~/components/Home',
  ],
  auth: {
    redirect: {
      login: '',
      logout: '/',
      callback: '',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 60 * 30,
          global: true,
        },
        user: {
          property: '',
          autoFetch: true,
        },
        endpoints: {
          login: { url: 'http://localhost:5000/api/users/login', method: 'post', propertyName: 'token', },
          user: { url: 'http://localhost:5000/api/users/me', method: 'get' },
          logout: false,
        }
      }
    }
  },
  http: {
    baseURL: 'localhost:5000', // default is localhost:3000, otherwise it is the HOST/NITRO_HOST and PORT/NITRO_PORT enviromental values
    browserBaseURL: undefined, // default is nuxt app baseURL, otherwise if interceptorPlugin is enabled it's based on the proxy urls
    proxyHeaders: true,
    proxyHeadersIgnore: [
      'accept',
      'connection',
      'cf-connecting-ip',
      'cf-ray',
      'content-length',
      'content-md5',
      'content-type',
      'host',
      'if-modified-since',
      'if-none-match',
      'x-forwarded-host',
      'x-forwarded-port',
      'x-forwarded-proto'
    ],
    serverTimeout: 10000,
    clientTimeout: 25000,
    https: false,
    retry: 1,
    headers: {
      accept: 'application/json, text/plain, */*'
    },
    credentials: 'omit',
    debug: false,
    interceptorPlugin: false
  }
})
