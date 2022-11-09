<template>
  <div class="home__advertising">
    <img src="@/assets/img/Home/Flower.png" alt="Flower" />
    <h2>Доставка бесплатно от 1000 ₽</h2>
  </div>
</template>
<script>
export default {
  name: "Advestiring",
};
</script>
<style lang="scss">
.home__advertising {
  max-height: 200px;
  background-image: url("@/assets/img/Home/Slider.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  img {
  }
  h2 {
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    color: #414141;
  }
}
</style>