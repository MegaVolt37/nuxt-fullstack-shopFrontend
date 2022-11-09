export const storeCatalog = defineStore('Catalog', {
    state: () => ({ Catalog: 1, counter: 1 }),
    getters: {
        getProductCatalog() {
            return this.Catalog + 1;
        },
    },
    actions: {
        increment() {
            this.counter++;
            this.Catalog++;
        }
    },
})