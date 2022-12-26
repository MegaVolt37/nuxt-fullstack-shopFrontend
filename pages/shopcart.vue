<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <h1 class="cart__title">
          Корзина <span>{{ cartProducts?.length }}</span>
        </h1>
        <div class="cart__buttons">
          <div class="cart__buttons-choose" @click="checkedAll">
            <span></span>
            <p>Выделить всё</p>
          </div>
          <div class="cart__buttons-remove" @click="removeCart">
            <p>Удалить выбранные</p>
          </div>
        </div>
        <div class="cart__content">
          <div class="cart__items">
            <shop-cart-item
              v-for="product in cartProducts"
              :key="product._id"
              :item="product"
              @getCheckbox="getCheckbox"
              :checkedAll="checkAll"
            />
          </div>
          <div class="cart__total">
            <ShopCartTotal :countChecked="checkAll" @sendOrder="sendOrder" />
          </div>
        </div>
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
  async asyncData() {
    try {
      return {
        cartProducts: await fetchAuth("/api/cart", {
          method: "get",
        }),
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
      } else {
        const indexCheck = this.checkAll.findIndex(
          (item) => item.id === value.id
        );
        if (indexCheck < 0) {
          this.checkAll.push(value);
        } else {
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
            fetchAuth(`/api/cart/${el.id}`, { method: "delete" })
          );
        });
        Promise.all(promiseArray)
          .then(() => {
            fetchAuth("/api/cart", { method: "get" }).then((res) => {
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
    async sendOrder() {
      try {
        const res = await fetchAuth("/api/cart", { method: "get" });
        this.cartProducts = res;
         this.getCountCart();
      } catch (error) {
        console.error(error);
      }
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
  .cart__content {
    display: flex;
    gap: 40px;
  }
  .cart__items {
    flex: 1 0 auto;
  }
  .cart__total {
    height: fit-content;
    position: sticky;
    top: 80px;
  }
}
</style>