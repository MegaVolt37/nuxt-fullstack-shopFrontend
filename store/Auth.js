export const storeAuth = defineStore('Auth', {
  state: () => ({ user: "", }),
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    login(data) {
      return new Promise((resolve, reject) => {
        $fetch(`http://localhost:5000/api/users/login`, {
          method: "POST",
          body: {
            email: data.email,
            password: data.password,
          },
        }).then((res) => {
          this.user = res
          localStorage.setItem('token', res.token)
          this.getInfoUser()
          resolve(res);
        }).catch((e) => {
          reject(e)
        })
      })
    },
    async getInfoUser() {
      try {
        const data = $fetch(`http://localhost:5000/api/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        })
        this.user = data
      } catch (error) {
        console.log(error)
      }
    },
  },
})