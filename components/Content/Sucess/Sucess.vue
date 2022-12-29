<template>
  <div class="error__wrapper">
    <div class="error">
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: String,
  },
};
</script>

<style lang="scss" scoped>
.error__wrapper {
  position: fixed;
  right: 10%;
  bottom: 10%;
  background-color: #fff;
  border: 2px solid #5ce51d;
  border-radius: 6px;
  padding: 5px 10px;
  animation-duration: 0.3s;
  animation-name: slidein;
}
.error {
  display: flex;
  gap: 10px;
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