
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('vue:error', (error) => {
    console.log('vue:error', 1, error)
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error', 1)
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
  console.log(nuxtApp)
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('global error handler', 1, error, context)
    // if (process.client) {
    //   console.log(..._args)
    // }
  }
})