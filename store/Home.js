// import productsActions from "../../../data/productsActions.json";
// import productNews from "../../../data/productsNews.json";
// import Articles from "../../../data/productsArticles.json";

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