<template>
  <div class="cart__price">
    <div class="cart__price-block cart__price-block_products">
      <p>
        {{ countChecked?.length }}
        {{ readDeclination }}
      </p>
      <span>{{ fullPrice.toFixed(2) }} ₽</span>
      <p>Скидка</p>
      <span>{{ readPriceStock }} ₽</span>
    </div>
    <div class="cart__price-block cart__price-block_total">
      <p>Итог</p>
      <span>{{ readTotalPrice.toFixed(2) }} ₽</span>
    </div>
    <span class="cart__price-lock">Минимальная сумма заказа 1000р</span>
    <button class="cart__price-btn" @click="sendOrder">Оформить заказ</button>
  </div>
</template>

<script>
export default {
  name: "ShopCartTotal",
  data() {
    return {
      fullPrice: 0,
      priceStock: 0,
    };
  },
  props: {
    countChecked: Array,
  },
  watch: {
    "countChecked.length"(value) {
      if (value) {
        this.readFullPrice();
      } else {
        this.fullPrice = 0;
        this.priceStock = 0;
      }
    },
  },
  methods: {
    readFullPrice() {
      this.fullPrice = 0;
      this.priceStock = 0;
      this.countChecked.forEach((item) => {
        this.fullPrice += item.price ? item.price : item.price_stock;
        this.priceStock += item.price ? item.price - item.price_stock : null;
      });
    },
    async sendOrder() {
      let arrId = this.countChecked.map((item) => {
        return { id: item.id, count: item.count };
      });
      try {
        await fetchAuth("/api/cart/order", {
          method: "post",
          body: arrId,
        });
        this.$emit("sendOrder")
      } catch (error) {}
    },
  },
  computed: {
    readDeclination() {
      return `${Declination(
        this.countChecked?.length,
        "товар",
        "товара",
        "товаров"
      )}`;
    },
    readPriceStock() {
      return this.priceStock ? `- ${this.priceStock.toFixed(2)}` : 0;
    },
    readTotalPrice() {
      return this.fullPrice - this.priceStock;
    },
  },
  emits: ["sendOrder"],
};
</script>

<style lang="scss" scoped>
.cart__price {
  display: grid;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 10px;
  &-block {
    display: grid;
    gap: 10px;
    grid-template-columns: max-content 1fr;
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
  &-block_total {
    margin-bottom: 15px;
    span {
      font-family: "Rubik700";
      font-weight: 700;
      font-size: 24px;
    }
  }
  &-lock {
    font-size: 12px;
    background: #d80000;
    border-radius: 4px;
    padding: 5px 5px;
    text-align: center;
    margin-bottom: 15px;
  }
  &-btn {
    font-size: 24px;
    color: #ff6633;
    padding: 16px 16px;
    background: #fcd5ba;
    border-radius: 4px;
  }
  span {
    display: block;
    width: 100%;
  }
}
</style>