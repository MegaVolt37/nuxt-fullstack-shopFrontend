<template>
  <div class="cart__item">
    <div class="cart__item-checkbox">
      <checkbox :idStyle="item._id" @getCheckbox="getCheckbox" :value="check" />
    </div>
    <img
      class="cart__item-img"
      src="@/assets/img/Products/3.jpg"
      alt="Изображение товара"
    />
    <div class="cart__item-content">
      <h5 class="cart__item-content__title">
        {{ item.name }}
      </h5>
      <div class="cart__item-content__price">
        <div class="price__card">
          <span>{{ readPriceDiscount }} ₽</span>
          <p>С картой</p>
        </div>
        <div class="price__default">
          <span>{{ division(item.price) }} ₽</span>
          <p>Обычная</p>
        </div>
        <p class="price__descr">за шт.</p>
        <span class="price__stock" v-if="item?.stock">-{{ item?.stock }}%</span>
      </div>
    </div>
    <div class="cart__item-choiser">
      <choiser
        @getChoise="getChoise"
        :start="item.countCart"
        :min="1"
        :max="item.countStorage"
      />
    </div>
    <div class="cart__item-price">
      <p>{{ readPriceStock }} ₽</p>
      <span v-if="item?.stock">{{ readPrice }} ₽</span>
    </div>
  </div>
</template>

<script>
import checkbox from "../Content/Checkbox/checkbox.vue";
export default {
  data() {
    return {
      value: this.item.countCart,
      check: false,
    };
  },
  computed: {
    readPrice() {
      return (+division(this.item.price) * this.value).toFixed(2);
    },
    readPriceDiscount() {
      return (+division(this.item.discount)).toFixed(2);
    },
    readPriceStock() {
      return this.item?.stock
        ? (+division(this.item?.priceStock) * this.value).toFixed(2)
        : (this.readPrice * this.value).toFixed(2);
    },
  },
  methods: {
    getChoise(value) {
      this.value = value;
    },
    getCheckbox(value) {
      this.$emit("getCheckbox", { id: this.item._id, check: value, price: this.item.priceStock ? +this.readPrice : null, price_stock: +this.readPriceStock, count: this.value });
    },
  },
  watch: {
    "checkedAll.length"(value) {
      if (value) {
        this.checkedAll.forEach((el) => {
          if (el.id == this.item._id) {
            this.check = true;
          }
        });
      } else {
        this.check = undefined;
      }
    },
  },
  emits: ["getCheckbox"],
  components: { checkbox },
  props: {
    item: Object,
    checkedAll: Array,
  },
};
</script>

<style lang="scss" scoped>
.cart__item {
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  position: relative;
  margin-bottom: 25px;
  padding: 10px 10px 10px 0;
  &-checkbox {
    position: absolute;
    left: 10px;
    top: -10px;
    width: fit-content;
  }
  &-img {
    margin-top: -10px;
    width: 80px;
    height: 60px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-right: 10px;
  }
  .cart__item-content {
    margin-left: 0;
    margin-right: auto;
    &__title {
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 16px;
      color: #414141;
      margin-bottom: 10px;
    }
    &__price {
      display: flex;
      gap: 10px;
      .price__card {
        font-family: "Rubik700";
        font-weight: 700;
        font-size: 12px;
        color: #414141;
        p {
          color: #bfbfbf;
          font-family: "Rubik400";
          font-weight: 400;
        }
      }
      .price__default {
        font-family: "Rubik400";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #606060;
        p {
          color: #bfbfbf;
        }
      }
      .price__descr {
        font-size: 12px;
        color: #606060;
      }
      .price__stock {
        background: #ff6633;
        border-radius: 4px;
        font-size: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        padding: 4px 8px;
      }
    }
  }
  .cart__item-choiser {
    .choiser {
      margin-right: 25px;
      width: 100px;
      height: 40px;
      input {
        position: static;
      }
    }
  }
  .cart__item-price {
    min-width: 105px;
    p {
      font-family: "Rubik700";
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #414141;
      text-align: right;
    }
    span {
      display: block;
      font-weight: 400;
      font-size: 16px;
      color: #8f8f8f;
      text-decoration: line-through;
      text-align: right;
    }
  }
}
</style>