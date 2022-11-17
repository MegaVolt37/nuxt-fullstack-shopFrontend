<template>
  <div class="catalog">
    <div class="container">
      <h1 class="catalog__title" @click="getImgUrl()">Каталог</h1>
      <h3 @click="remove(allCards[0]?._id)">{{ allCards[0]?.name }}</h3>
      <h3>{{ allCards[0]?.description }}</h3>
      <img :src="allCards[0]?.image" alt="" />
      <input
        class="downloadFile"
        type="file"
        @change="changeHandler"
        accept="image/jpeg,image/png,image/gif"
      />
      <div class="catalog__content" @click="addPost">
        <div
          class="catalog__content-item"
          v-for="(catalog, index) in 5"
          :key="index"
        >
          <img :src="img" alt="" />
          <p>{{ catalog.name }}</p>
          <div class="gradient"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { storeCatalog } from "~/store/Catalog";
import img from "~/assets/img/Catalog/0.jpg";
export default defineNuxtComponent({
  name: "catalog",
  data() {
    return {
      Images: [],
      img,
      result: "",
      res: "",
    };
  },
  computed: {
    ...mapState(storeCatalog, ["Catalog", "getProductCatalog"]),
  },
  async asyncData({}) {
    try {
      return {
        allCards: await $fetch("http://localhost:5000/api/catalog"),
      };
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async changeHandler() {
      const input = document.querySelector(".downloadFile");
      const file = input.files[0];
      let one = await readBase(file);
      function readBase(value) {
        return new Promise((resolve) => {
          let reader = new FileReader();
          reader.onloadend = function () {
            resolve(reader.result);
          };
          reader.readAsDataURL(value);
        });
      }
      this.result = one;
    },
    async remove(id) {
      console.log(id);
      try {
        await $fetch(`http://localhost:5000/api/catalog/${id}`, {
          method: "DELETE",
        });
        this.allCards = await $fetch("http://localhost:5000/api/catalog");
      } catch (e) {
        console.log(e);
      }
    },
    async addPost() {
      try {
        await $fetch("http://localhost:5000/api/catalog", {
          method: "POST",
          body: {
            name: "request.body.name",
            description: "request.body.description",
            price: "request.body.price",
            count: "request.body.count",
            image: this.result,
          },
        });
        this.res = await $fetch("http://localhost:5000/api/catalog");
      } catch (e) {
        throw e;
      }
    },
    ...mapActions(storeCatalog, ["increment"]),
    getImgUrl(index) {
      // let Arr = [];
      // for (let i = 0; i < 12; i++) {
      //   Arr.push({ img: new URL(`~/assets/img/Catalog/${index}.jpg`, import.meta.url) });
      // }
      // console.log(Arr);
      // return Arr;
      console.log(require(`~/assets/img/Catalog/${index}.jpg`));
      return new URL(`~/assets/img/Catalog/${index}.jpg`, import.meta.url);
    },

    // image(index) {
    //   return require(`./${index}.jpg`);
    // },
  },
  head() {
    return {
      title: "Каталог",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Здесь находжятся продукты",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.catalog {
  &__title {
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 64px;
    line-height: 150%;
    color: #414141;
    margin-bottom: 60px;
  }
  .catalog__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 40px;
    &-item {
      position: relative;
      max-height: 200px;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      &:hover .gradient {
        background: linear-gradient(
          180deg,
          rgba(255, 102, 51, 0) 0%,
          #ff6633 100%
        );
        height: 175px;
      }
      p {
        position: absolute;
        z-index: 1;
        bottom: 10px;
        left: 10px;
        font-family: "Rubik700";
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        color: #ffffff;
        text-align: left;
      }
      .gradient {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 115px;
        background: linear-gradient(
          180deg,
          rgba(112, 192, 91, 0) 0%,
          #70c05b 82.81%
        );
      }
    }
    &-item:first-child {
      grid-column: 1/3;
    }
    &-item:nth-child(10) {
      grid-column: 3/5;
    }
    &-item:nth-child(12) {
      grid-column: 2/4;
    }
  }
}
</style>