<template>
  <div class="product">
    <div class="container">
      <h1>{{ infoCard?.name }}</h1>
      <img :src="infoCard?.image" alt="" />
      <div class="product__content">
        <div class="product__list" v-for="(key, index) in keys" :key="index">
          <p>{{ key.name }}</p>
          <span v-if="!read(index)"
            >{{ readKey(key.key)
            }}<img
              v-if="readSupplier(key.key) && supplier"
              src="@/assets/icon/Pencil.svg"
              alt="Редактировать"
              @click="editData(index)"
          /></span>
          <input
            v-if="isEdit && index == indexEdit"
            type="text"
            v-model="infoEdit"
            @keyup.enter="sendInfo"
          />
        </div>
      </div>
      <button v-if="!supplier" @click="addToCart">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { storeHeader } from "~/store/Header";
import { storeError } from "~/store/Error";
export default defineNuxtComponent({
  name: "Product",
  data() {
    return {
      keys: [
        { key: "price", name: "Цена" },
        { key: "stock", name: "Скидка" },
        { key: "countStorage", name: "Количество на складе" },
        { key: "article", name: "Артикул товара" },
        { key: "category", name: "Категория товара" },
        { key: "brand", name: "Бренд" },
        { key: "country", name: "Страна" },
        { key: "weight", name: "Вес товара" },
        { key: "supplier", name: "Поставщик" },
      ],
      isEdit: false,
      info: "",
      indexEdit: null,
      formData: {},
      card: "",
    };
  },
  async setup() {
    const route = useRoute();
    try {
      const infoCard = await fetchAuth(
        `/api/catalog/product/${route.params.id}`,
        {
          method: "get",
        }
      );
      return reactive({ infoCard });
    } catch (error) {}
  },
  watch: {
    indexEdit(value) {
      if (typeof value == "number") {
        let key = this.keys[value].key;
        this.formData[key] = "";
      }
    },
  },
  computed: {
    infoEdit: {
      get() {
        return this.info;
      },
      set(value) {
        let key = Object.keys(this.formData);
        this.formData[key[0]] = +value;
      },
    },
    supplier() {
      const user  = userInfo()._id
      return user == this.infoCard.supplier.id
    },
  },
  methods: {
    ...mapActions(storeHeader, ["getCountCart"]),
    ...mapActions(storeError, ["setSucess"]),
    
    readKey(value) {
      if (typeof this.infoCard[value] == "object") {
        return this.infoCard[value]?.fullName
          ? this.infoCard[value]?.fullName
          : "";
      }
      return this.infoCard[value];
    },
    readSupplier(value) {
      return typeof this.infoCard[value] != "object";
    },
    editData(index) {
      this.isEdit = true;
      this.indexEdit = index;
    },
    read(index) {
      return index == this.indexEdit ? true : false;
    },
    async sendInfo() {
      try {
        await fetchAuth(`/api/catalog/product/${this.$route.params.id}`, {
          method: "PATCH",
          body: this.formData,
        });
        this.formData = {};
        this.info = "";
        this.isEdit = false;
        this.indexEdit = null;
        this.infoCard = await fetchAuth(
          `/api/catalog/product/${this.$route.params.id}`,
          {
            method: "get",
          }
        );
        this.setSucess("Данные успешно изменены");
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart() {
      try {
        const res = await fetchAuth(`/api/cart/add/${this.infoCard._id}`, {
          method: "post",
          body: { count: 1 },
        });
        if (res) {
          this.setSucess("Товар успешно добавлен в корзину");
        }
        this.getCountCart();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.product {
  padding-top: 50px;
  &__content {
    margin-top: 30px;
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    row-gap: 5px;
    column-gap: 15px;
  }
  &__list {
    display: contents;
    img {
      margin-left: 10px;
      height: 14px;
      cursor: pointer;
    }
    input {
      width: 100%;
      max-width: 320px;
    }
  }
  button {
    cursor: pointer;
    background: #ff6633;
    border-radius: 4px;
    padding: 15px 10px;
    max-width: 320px;
    width: 100%;
    font-size: 17px;
    margin-top: 30px;
  }
}
</style>