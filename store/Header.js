export const storeHeader = defineStore('Header', {
  state: () => ({ countCart: 0, counter: 1 }),
  getters: {
    readCountCart() {
      return this.countCart;
    },
  },
  actions: {
    async getCountCart() {
      try {
        const data = await fetchAuth(
          "/api/cart/count/"
        );
        this.countCart = data
      } catch (error) {
        console.log(error)
      }
    },
    increment() {
      this.counter++;
      this.Catalog++;
    }
  },
})