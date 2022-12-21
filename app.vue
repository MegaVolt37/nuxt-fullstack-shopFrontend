<template>
  <NuxtLayout>
    <NuxtPage />
    <Error
      v-if="getError"
      :error="getError"
    />
  </NuxtLayout>
</template>
<script>
import { mapState } from "pinia";
import { storeError } from "~/store/Error";
export default {
  name: "app",
  computed: {
    ...mapState(storeError, ["getError"]),
  },
};
</script>
