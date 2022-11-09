<template>
  <div class="offers__wrapper">
    <div class="offers__wrapper-top">
      <h3 class="block__title">{{ Title }}</h3>
      <div class="offers__wrapper-link">
        <span>Все акции</span
        ><img src="@/assets/icon/Header/chevronDown.svg" alt="chevronDown" />
      </div>
    </div>
    <div class="offers__wrapper-items">
      <Offer v-for="(offer, index) in Products" :key="index" :offer="offer" />
    </div>
  </div>
</template>
<script>
import Offer from "./OfferComponents/Offer.vue";
export default {
  name: "Offers",
  props: {
    Products: Array,
    Title: String,
  },
  components: {
    Offer,
  },
};
</script>
<style lang="scss">
.offers__wrapper {
  // display: flex;
}
.offers__wrapper-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.offers__wrapper-items {
  display: flex;
  gap: 40px;
}
.offers__wrapper-link {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>