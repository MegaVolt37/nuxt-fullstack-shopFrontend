<template>
  <div class="header__badge">
    <span>{{ count }}</span>
  </div>
</template>
<script>
export default {
  name: "Badge",
  computed: {},
  props: {
    count: { type: Number, default: 0 },
  },
};
</script>
<style lang="scss">
.header__badge {
  background-color: $orange;
  border-radius: 4px;
  height: 13px;
  width: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  width: 13px;
  right: 5px;
  span {
    color: #fff;
    font-size: 10px;
  }
}
</style>