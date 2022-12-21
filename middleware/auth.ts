// export default defineNuxtRouteMiddleware((to, from) => {
//     console.log(to)
//     if (to.params.id === '1') {
//         return abortNavigation()
//     }
//     return navigateTo('/')

// })

export default function () {
    const token = useCookie('token')
    if (!token.value) {
    } else {
        navigateTo('/')
    }
  }
