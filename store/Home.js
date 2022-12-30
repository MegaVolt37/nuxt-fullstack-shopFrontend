export const state = () => ({
    productsActions,
    productNews,
    Articles,
})

export const getters = {
    getHomeProductActions(state) {
        return state.productsActions;
    },
    getHomeProductNews(state) {
        return state.productNews;
    },
    getHomeArticles(state) {
        return state.Articles;
    },
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
}
