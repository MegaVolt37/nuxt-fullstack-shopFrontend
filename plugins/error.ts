export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error', _args)
    // if (_args[0].statusCode == 404) {
    //   navigateTo('/404')
    // }
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error', _args)
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('global error handler', _args[0]?.statusCode)
    const status = parseInt(_args[0]?.statusCode)
    console.log(status)
    switch (status) {
      case 404:
        navigateTo('/404')
        break
      case 500:
        navigateTo('/500')
        break
    }
  }
})