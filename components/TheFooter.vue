<template>
  <footer class="Footer">
    <div class="container">
      <div class="Footer__content">
        <div class="logo" @click="goToHome">
          <img src="@/assets/icon/Footer/logo.svg" alt="logo" />
        </div>
        <ul class="footer__links">
          <li
            class="footer__links-link"
            v-for="(link, index) in Links"
            :key="index"
            @click="routePath(link)"
          >
            {{ link.title }}
          </li>
        </ul>
        <a class="footer__phone" href="#">
          <img src="@/assets/icon/Footer/Phone.svg" alt="Phone" />
          <span>8 800 777 33 33</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      Links: [
        {
          title: "О компании",
          link: "/about",
        },
        {
          title: "Контакты",
          link: "/contacts",
        },
        {
          title: "Вакансии",
          link: "/vacancies",
        },
        {
          title: "Статьи",
          link: "/articles",
        },
        {
          title: "Политика обработки персональных данных",
          link_privacy:
            "https://www.gnivc.ru/on_gnivts/information_disclosure/pdp/",
        },
      ],
    };
  },
  methods: {
    routePath(value) {
      window.scrollTo(0, top);
      if (value.link) {
        this.$router.push(value.link);
      } else {
        window.open(value.link_privacy, "_blank");
      }
    },
    goToHome() {
      window.scrollTo(0, top);
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.Footer {
  padding-top: 25px;
  background-image: url("@/assets/img/Footer/bg.png");
  background-color: #f9f4e2;
  padding-bottom: 25px;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
  }
}
.footer__links {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 40px;
  &-link {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #414141;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.footer__phone {
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #414141;
  }
}
</style>
