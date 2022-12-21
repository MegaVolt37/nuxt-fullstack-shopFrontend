export const storeError = defineStore('Error', {
    state: () => ({ Error: "" }),
    getters: {
        getError() {
            return this.Error;
        },
    },
    actions: {
        setError(value) {
            this.Error = value
        }
    },
})