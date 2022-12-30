<template>
  <div class="page">
    <the-header />
    <section>
      <NuxtPage />
      <Error v-if="getError && !getSucess" :error="getError" />
      <Sucess v-else-if="!getError && getSucess" :error="getSucess" />
    </section>
    <the-footer />
  </div>
  <!-- <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> -->
</template>
<script>
import { mapState } from "pinia";
import { storeError } from "~/store/Error";
export default {
  name: "app",
  computed: {
    ...mapState(storeError, ["getError", "getSucess"]),
  },
};
</script>
<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
