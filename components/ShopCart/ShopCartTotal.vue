<template>
  <div class="cart__price">
    <div class="cart__price-block cart__price-block_products">
      <p>3 товара</p>
      <span>258,10 ₽</span>
      <p>Скидка</p>
      <span>-8,01 ₽</span>
    </div>
    <div class="cart__price-block">
      <p>Итог</p>
      <span>250,09 ₽</span>
    </div>
    <span class="cart__price-lock">Минимальная сумма заказа 1000р</span>
    <button class="cart__price-btn">Оформить заказ</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cart__price {
  display: grid;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  &-block {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    span {
      text-align: right;
    }
    &:first-child {
      margin-bottom: 50px;
    }
  }
  &-block_products {
    span:last-child {
      font-family: "Rubik700";
      font-weight: 700;
      font-size: 16px;
      color: #ff6633;
    }
  }
  span {
    display: block;
    width: 100%;
  }
}
</style>