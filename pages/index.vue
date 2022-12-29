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
export default defineNuxtComponent({
  data() {
    return {
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
    };
  },
  async setup() {
    const [stock, news, posts] = await Promise.all([
      fetchAuth("/api/catalog/product/stock", { method: "get" }),
      fetchAuth("/api/catalog/product/news", { method: "get" }),
      fetchAuth("/api/catalog/post", { method: "get" }),
    ]);
    const arrayProduct = [
      { Title: "Акции", items: stock },
      { Title: "Новинки", items: news },
    ];
    return {
      arrayProduct,
      posts,
    };
  },
  head() {
    return {
      title: "Главная страница",
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