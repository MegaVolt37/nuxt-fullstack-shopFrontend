<template>
  <div class="home__maps">
    <h3 class="block__title">Наши магазины</h3>
    <div class="maps__buttons">
      <button
        class="maps__buttons-btn"
        :class="{ active: button.map == (map.map || OpenMap) }"
        v-for="(button, index) in maps"
        :key="index"
        @click="openMap(button)"
      >
        {{ button.button }}
      </button>
    </div>
    <div class="maps__content">
      <iframe
        :src="`${map ? map.map : OpenMap}`"
        width="100%"
        height="355"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "Maps",
  data() {
    return {
      map: "",
      maps: [
        {
          button: "Иваново",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69532.8162560047!2d40.98210545!3d57.0018885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d1423afe9a7c3%3A0xe25ab9c4547ae2e!2z0JjQstCw0L3QvtCy0L4sINCY0LLQsNC90L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1658922614784!5m2!1sru!2sru",
        },
        {
          button: "Mосква",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17963.016135236303!2d37.614619172487856!3d55.7519526261598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1658923708835!5m2!1sru!2sru",
        },
        {
          button: "Тейково",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17451.2218051237!2d40.511543511266474!3d56.85618827521158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d1f8a3690d99b%3A0xdc27bfb03a5fece2!2z0KLQtdC50LrQvtCy0L4sINCY0LLQsNC90L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1658923794878!5m2!1sru!2sru",
        },
      ],
    };
  },
  computed: {
    OpenMap() {
      if (!this.map) {
        return this.maps[0].map;
      }
    },
  },
  methods: {
    openMap(value) {
      this.map = value;
      console.log(value);
    },
  },
};
</script>
<style lang="scss">
.home__maps {
  margin-top: 120px;
}
.maps__buttons {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 40px;
  margin-bottom: 25px;
  .active {
    background-color: #70c05b;
    color: #ffffff;
  }
  &-btn {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #606060;
    background-color: #f3f2f1;
    border-radius: 4px;
    padding: 4px 8px;
  }
}
.maps__content {
  iframe {
    border-radius: 4px;
  }
}
</style>