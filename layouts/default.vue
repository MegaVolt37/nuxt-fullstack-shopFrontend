<template>
  <div class="page">
    <the-header />
    <section>
      <slot />
    </section>
    <the-footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>