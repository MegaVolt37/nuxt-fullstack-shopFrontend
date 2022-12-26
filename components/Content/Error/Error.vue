<template>
  <div class="error__wrapper">
    <div class="error">
      <span v-if="error.status">{{ error.status }}</span>
      <p v-if="error.data">{{ error.data.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: Object,
  },
};
</script>

<style lang="scss" scoped>
.error__wrapper {
  position: fixed;
  right: 10%;
  bottom: 10%;
  background-color: #fff;
  border: 2px solid #e51d1d;
  border-radius: 6px;
  padding: 5px 10px;
  animation-duration: 0.3s;
  animation-name: slidein;
}
.error {
  display: flex;
  gap: 10px;
  span {
    padding-right: 5px;
    border-right: 1px solid #000;
  }
  p {
    max-width: 350px;
  }
}

@keyframes slidein {
  0% {
    bottom: 8%;
  }
  100% {
    bottom: 10%;
  }
}
</style>