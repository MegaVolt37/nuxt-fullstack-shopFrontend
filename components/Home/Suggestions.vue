<template>
  <div class="home__suggestions">
    <h3 class="block__title">Специальные предложения</h3>
    <div class="suggestions__content">
      <div
        class="suggestions__item"
        v-for="(item, index) in Suggestions"
        :key="index"
      >
        <div>
          <p>{{ item.title }}</p>
          <span>{{ item.subtitle }}</span>
        </div>
        <img v-if="item.image" :src="item.image" alt="Image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Suggestions",
  props: { Suggestions: Array },
};
</script>
<style lang="scss">
.home__suggestions {
  margin-top: 120px;
}
.suggestions__content {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
  max-height: 200px;
}
.suggestions__item {
  padding-left: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #e5ffde;
  cursor: pointer;
  &:hover {
    background-color: #fcd5ba;
    box-shadow: 0px 8px 16px rgba(202, 147, 96, 0.5);
  }
  div {
    max-width: 258px;
  }
  p {
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #414141;
  }
  span {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #414141;
  }
}
.suggestions__item:last-child {
  gap: 50px;
  background-image: url("@/assets/img/Home/banner.svg");
  background-repeat: no-repeat;
  img {
    margin-top: 15px;
  }
}
</style>