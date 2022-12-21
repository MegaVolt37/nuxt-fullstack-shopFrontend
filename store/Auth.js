export const storeAuth = defineStore('auth', {
  state: () => ({ user: "", token: "", }),
  getters: {
    getLogin() {
      const token = useCookie('token')
      return token.value
    },
    getUser() {
      const user = useCookie('user')
      return user.value
    },
  },
  actions: {
    async login(form) {
      try {
        const res = await $fetch(`/api/users/login`, {
          method: "post",
          body: form,
        })
        const user = useCookie('user')
        const token = useCookie('token')
        user.value = res
        token.value = res.token
        localStorage.setItem('user_id', res._id);
        localStorage.setItem('token', res.token);
        this.user = res;
        this.token = res.token;
      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      try {
        
      } catch (error) {
        
      }
    },
  },
})