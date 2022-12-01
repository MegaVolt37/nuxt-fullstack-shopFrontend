<template>
  <div class="home__articles">
    <div class="articles__header">
      <h3 class="block__title">Статьи</h3>
      <div class="articles__header-link">
        <span>Все акции</span
        ><img src="@/assets/icon/Header/chevronDown.svg" alt="chevronDown" />
      </div>
    </div>
    <div class="articles__content">
      <div
        class="articles__item"
        v-for="(Article, index) in Articles?.slice(-3).reverse()"
        :key="index"
      >
        <div class="articles__item__top">
          <img :src="Article.image" alt="Изображение статьи" />
        </div>
        <div class="articles__item__content">
          <span class="articles__item__content-date">{{
            new Date(Article.createdAt).toLocaleDateString()
          }}</span>
          <h6 class="articles__item__content-title">
            {{ Article.title }}
          </h6>
          <p class="articles__item__content-text">
            {{ Article.text }}
          </p>
          <button class="articles__item__content-button">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Articles",
  data() {
    return {
      posts: "",
    };
  },
  props: {
    Articles: Array,
  },
};
</script>
<style lang="scss">
.home__articles {
  margin-top: 120px;
}
.articles__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  &-link {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
.articles__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.articles__item {
  flex: 0 0 375px;
  display: grid;
  grid-template-rows: 165px 1fr;
  background-color: #ffffff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
  &:hover {
    box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
  }
}
.articles__item__top {
  border-radius: 4px 4px 0 0;
  overflow: hidden;
}
.articles__item__content {
  padding: 10px;
  display: grid;
  gap: 10px;
  &-date {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #8f8f8f;
  }
  &-title {
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #414141;
  }
  &-text {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #414141;
  }
  &-button {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #70c05b;
    background-color: #e5ffde;
    border-radius: 4px;
    padding: 8px 0;
    width: 150px;
    cursor: pointer;
    &:hover {
      background-color: #70c05b;
      color: #fff;
    }
  }
}
</style>