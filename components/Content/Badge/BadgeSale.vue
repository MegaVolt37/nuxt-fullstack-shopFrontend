<template>
  <div class="product__badge">
    <span>-50%</span>
  </div>
</template>
<script>
export default {
  name: "BadgeSale",
  computed: {},
  props: {
    count: Number,
  },
};
</script>
<style lang="scss">
.product__badge {
  background-color: $orange;
  border-radius: 4px;
  height: 32px;
  width: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
  bottom: 10px;
  span {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
  }
}
</style>