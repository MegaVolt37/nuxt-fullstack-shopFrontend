<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <div class="header__logo">
          <img src="@/assets/icon/Header/Logo.svg" alt="Logo" />
        </div>
        <div class="header__catalog">
          <button
            @click="openCatalog"
            @mouseover="openCatalog"
            @mouseleave="closeCatalog"
          >
            <img src="@/assets/icon/Header/menu.svg" alt="menu" />Каталог
            <HeaderCatalog v-if="isOpenCatalog" />
          </button>
        </div>
        <div class="header__search">
          <input type="text" placeholder="Найти товар" />
          <img src="@/assets/icon/Header/search.svg" alt="search" />
        </div>
        <ul class="header__list">
          <li class="header__list-item">
            <img src="@/assets/icon/Header/IconFavorites.svg" alt="Favorites" />
            <p>Избранное</p>
            <Badge />
          </li>
          <li class="header__list-item">
            <img src="@/assets/icon/Header/Orders.svg" alt="Orders" />
            <p>Заказы</p>
            <Badge />
          </li>
          <li class="header__list-item">
            <img
              src="@/assets/icon/Header/shoppingCart.svg"
              alt="shoppingCart"
            />
            <p>Корзина</p>
            <Badge />
          </li>
        </ul>
        <div class="header__profile">
          <img
            class="header__profile-avatar"
            src="@/assets/img/avatar.png"
            alt="Avatar"
          />
          <p>Алексей</p>
          <img src="@/assets/icon/Header/chevronDown.svg" alt="chevronDown" />
        </div>
      </nav>
    </div>

    <!-- <ul>
      <li>
        <nuxt-link to="/todos">Домой</nuxt-link>
      </li>
    </ul>
    <button @click="plus">click</button> -->
  </header>
</template>
<script>
import Badge from "./Content/Badge/Badge.vue";
import HeaderCatalog from "./Content/Header/HeaderCatalog.vue";
export default {
  name: "Header",
  data() {
    return {
      isOpenCatalog: false,
    };
  },
  methods: {
    openCatalog() {
      this.isOpenCatalog = true;
    },
    closeCatalog() {
      this.isOpenCatalog = false;
    },
  },
  components: {
    Badge,
    HeaderCatalog,
  },
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 15;
  background-color: #fff;
  &__nav {
    display: flex;
    align-items: center;
    padding: 15px 0;
  }
  &__logo {
    cursor: pointer;
  }
  &__catalog {
    button {
      cursor: pointer;
      justify-content: space-evenly;
      display: flex;
      align-items: center;
      padding: 8px;
      gap: 8px;
      width: 140px;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #fff;
      border-radius: 4px;
      background-color: #70c05b;
      font-family: "Rubik400";
      margin-left: 40px;
      margin-right: 15px;
    }
  }
  &__search {
    background: #ffffff;
    border: 1px solid #70c05b;
    border-radius: 4px;
    position: relative;
    max-width: 375px;
    padding: 8px 40px 8px 15px;
    flex: 1;
    height: 40px;
    input {
      border: none;
      font-family: "Rubik400";
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #8f8f8f;

      width: 100%;
      &:focus {
        outline: none;
      }
      // &::placeholder {
      //   font-family: "Rubik400";
      //   font-style: normal;
      //   font-weight: 400;
      //   font-size: 16px;
      //   line-height: 150%;
      //   color: #8f8f8f;
      // }
    }
    img {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .header__list {
    display: flex;
    gap: 25px;
    margin-left: 40px;
    margin-right: 25px;
    &-item {
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-item:first-child {
      .header__badge {
        right: 15px;
      }
    }
  }
  .header__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    img {
    }
  }
}
</style>