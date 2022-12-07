<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <h1 class="cart__title">Корзина <span>3</span></h1>
        <div class="cart__buttons">
          <div class="cart__buttons-choose" @click="checkedAll">
            <span></span>
            <p>Выделить всё</p>
          </div>
          <div class="cart__buttons-remove" @click="removeCart">
            <p>Удалить выбранные</p>
          </div>
        </div>
        <div class="cart__items">
          <shop-cart-item
            v-for="product in cartProducts"
            :key="product._id"
            :item="product"
            @getCheckbox="getCheckbox"
            :checkedAll="checkAll"
          />
        </div>
        <div class="cart__total"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { storeHeader } from "~/store/Header";
export default defineNuxtComponent({
  name: "shopCart",
  data() {
    return {
      checkAll: [],
      activeCheckedAll: false,
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
  watch: {
    "cartProducts.length"() {},
  },
  methods: {
    ...mapActions(storeHeader, ["getCountCart"]),
    getCheckbox(value) {
      if (value.check == false) {
        this.checkAll.forEach((element, index) => {
          if (element.id == value.id) {
            this.checkAll.splice(index, 1);
          }
        });
        console.log("false", value);
      } else {
        const indexCheck = this.checkAll.findIndex(
          (item) => item.id === value.id
        );
        console.log(indexCheck, this.$refs);
        if (indexCheck < 0) {
          console.log("index < 0");
          this.checkAll.push(value);
        } else {
          console.log("index > 0");
          this.checkAll[indexCheck] = value;
        }
      }
    },
    checkedAll() {
      if (!this.activeCheckedAll) {
        this.cartProducts.forEach((el, index) => {
          this.checkAll[index] = { id: el._id, check: true };
        });
        this.activeCheckedAll = true;
      } else {
        this.checkAll = [];
        this.activeCheckedAll = false;
      }
    },
    removeCart() {
      if (this.checkAll.length) {
        let promiseArray = [];
        this.checkAll.forEach((el) => {
          console.log(el);
          promiseArray.push(
            this.$http.delete(`http://localhost:5000/api/cart/${el.id}`)
          );
        });
        Promise.all(promiseArray)
          .then(() => {
            this.$http.$get("http://localhost:5000/api/cart").then((res) => {
              this.cartProducts = res;
            });
            this.checkAll = [];
            this.getCountCart();
            console.log("Ok");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    removeOneProduct(id) {
      console.log(id);
      return new Promise((resolve, reject) => {
        this.$http
          .delete(`http://localhost:5000/api/cart/${id}`)
          .then(() => {
            resolve();
          })
          .catch(() => reject());
      });
    },
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