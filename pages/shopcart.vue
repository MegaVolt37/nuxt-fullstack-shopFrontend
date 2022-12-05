<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <h1 class="cart__title">Корзина <span>3</span></h1>
        <div class="cart__buttons">
          <div class="cart__buttons-choose">
            <span></span>
            <p>Выделить всё</p>
          </div>
          <div class="cart__buttons-remove">
            <p>Удалить выбранные</p>
          </div>
        </div>
        <div class="cart__items">
          <shop-cart-item
            v-for="product in cartProducts"
            :key="product._id"
            :item="product"
          />
        </div>
        <div class="cart__total"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  name: "shopCart",
  data() {
    return {
      one: "",
    };
  },
  async asyncData({ $http }) {
    try {
      return {
        cartProducts: await $http.$get("http://localhost:5000/api/cart"),
      };
    } catch (error) {
      console.log(error);
    }
  },
});
</script>

<style lang="scss" scoped>
.cart {
  &__wrapper {
    padding-top: 25px;
  }
  &__title {
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 64px;
    color: #414141;
    margin-bottom: 60px;
    position: relative;
    max-width: 325px;
    span {
      position: absolute;
      right: 0;
      top: 0;
      background-color: $orange;
      color: #fff;
      width: 26px;
      height: 32px;
      border-radius: 4px;
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .cart__buttons {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 25px;
    &-choose {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      span {
        width: 24px;
        height: 24px;
        background-color: #70c05b;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        &::after {
          content: "";
          width: 10px;
          height: 1px;
          background-color: #fff;
        }
      }
      p {
        font-family: "Rubik400";
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #606060;
      }
    }
    &-remove {
      cursor: pointer;
      p {
        font-family: "Rubik400";
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #ff6633;
      }
    }
  }
}
</style>