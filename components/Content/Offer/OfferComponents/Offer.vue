<template>
  <div class="offer__wrapper">
    <div class="offer__top">
      <img src="@/assets/img/Products/image1.jpg" alt="" />
      <div class="offer__top-favorites">
        <img src="@/assets/icon/Header/IconFavorites.svg" alt="IconFaforites" />
      </div>
      <BadgeSale />
    </div>
    <div class="offer__middle">
      <div class="offer__price">
        <div class="offer__price-card">
          <p>{{ offer.price_card.toFixed(2) }} ₽</p>
          <span>С картой</span>
        </div>
        <div class="offer__price-standart">
          <p>{{ offer.price.toFixed(2) }} ₽</p>
          <span>Обычная</span>
        </div>
      </div>
      <div class="offer__product">
        <p>{{ offer.name }}</p>
        <div class="offer__product-rating">
          <Rating
            v-for="index of 5"
            :key="index"
            :id="'1'"
            :name="1"
            :value="'1'"
          />
        </div>
      </div>
    </div>
    <div class="offer__bottom">
      <button class="offer__button-active">В корзину</button>
      <button class="offer__button-lock" v-if="false">В корзину</button>
    </div>
  </div>
</template>
<script>
import BadgeSale from "../../Badge/BadgeSale.vue";
import Rating from "../../Rating/Rating.vue";
export default {
  name: "Offer",
  props: {
    offer: Object,
  },
  components: {
    BadgeSale,
    Rating,
  },
};
</script>
<style lang="scss">
.offer__wrapper {
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1;
  &:hover {
    box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
  }
}
.offer__top {
  position: relative;
  height: 160px;
  overflow: hidden;
  &-favorites {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    background-color: #f3f2f1;
    opacity: 0.5;
    border-radius: 4px;
  }
}
.offer__middle {
  padding: 0 8px;
  padding-top: 8px;
}
.offer__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  &-card {
    p {
      font-family: "Rubik700";
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #414141;
    }
    span {
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: #bfbfbf;
    }
  }
  &-standart {
    p {
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #606060;
    }
    span {
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: #bfbfbf;
    }
  }
}
.offer__product {
  p {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #414141;
    margin-bottom: 8px;
  }
  &-rating {
    display: flex;
    margin-bottom: 8px;
  }
}
.offer__bottom {
  padding: 0 8px;
  margin-bottom: 8px;
}
.offer__button-active {
  font-family: "Rubik400";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #70c05b;
  border: 1px solid #70c05b;
  border-radius: 4px;
  width: 100%;
  padding: 8px 16px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    border: 1px solid #ff6633;
    background-color: #ff6633;
  }
}
.offer__button-lock {
  font-family: "Rubik400";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  background: #ff6633;
  border-radius: 4px;
  width: 100%;
  padding: 8px 16px;
}
</style>