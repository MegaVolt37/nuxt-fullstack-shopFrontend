<template>
  <div>
    <advertising />
    <div class="section__bacground">
      <div class="container">
        <div class="products">
          <offers
            v-for="(list, index) in arrayProduct"
            :key="index"
            :Products="list.items"
            :Title="list.Title"
            :indexBlok="index"
          />
        </div>
        <suggestions :Suggestions="Suggestions" />
        <maps />
        <articles :Articles="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageSuggestionCard from "~/assets/img/Home/SuggestionCard.png";
import ImageSuggestionProduct from "~/assets/img/Home/SuggestionProduct.png";
// import { mapGetters } from "vuex";
export default defineNuxtComponent({
  data() {
    return {
      Arr: "",
      productArray: [],
      Suggestions: [
        {
          title: "Оформите карту «Северяночка»",
          subtitle: "И получайте бонусы при покупке в магазинах и на сайте",
          image: ImageSuggestionCard,
        },
        {
          title: "Покупайте акционные товары",
          subtitle: "И получайте вдвое больше бонусов",
          image: ImageSuggestionProduct,
        },
      ],
      mountains: "",
    };
  },
  computed: {
    M() {
      return this.Arr ? this.Arr : this.hello;
    },
    // ...mapGetters([
    //   "getHomeProductActions",
    //   "getHomeProductNews",
    //   "getHomeArticles",
    // ]),
    Process() {
      return this.$config.API_BASE_URL;
    },
    m() {
      return this.hello;
    },
  },
  created() {
    this.readProducts();
  },
  methods: {
    async remove(id) {
      try {
        await $fetch(`http://localhost:5000/api/posts/${id}`, {
          method: "DELETE",
        });
        this.hello = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        console.log(e);
      }
    },
    async addPost(value) {
      console.log(value);
      try {
        await $http.$post("http://localhost:5000/api/posts", {
          body: { text: value },
        });
        this.hello = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        throw e;
      }
    },
    readProducts() {
      if ((this.getHomeProductActions, this.getHomeProductNews)) {
        this.productArray.push(
          { Title: "Акции", items: this.getHomeProductActions },
          { Title: "Новинки", items: this.getHomeProductNews },
          { Title: "Покупали раньше", items: this.getHomeProductNews }
        );
      }
    },
    set() {
      this.$store.dispatch("setLists", 5);
    },
  },
  async asyncData({ $http }) {
    const arrayProduct = [];
    try {
      const productsStock = await $http.$get(
        "http://localhost:5000/api/catalog/product/stock"
      );
      const productsNews = await $http.$get(
        "http://localhost:5000/api/catalog/product/news"
      );
      arrayProduct.push(
        { Title: "Акции", items: productsStock },
        { Title: "Новинки", items: productsNews }
      );
      return {
        hello: await $fetch("http://localhost:5000/api/posts"),
        posts: await $http.$get("http://localhost:5000/api/catalog/post"),
        arrayProduct,
      };
    } catch {}
  },

  head() {
    return {
      title: "Главная",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Лучший интернет-магазин",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.products {
  margin-top: 80px;
  display: grid;
  gap: 120px;
}
</style>