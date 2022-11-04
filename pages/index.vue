<template>
  <div>
    <h1>Hove</h1>
    <post @send="send" />
    <div v-for="post in M" :key="post">
      <p @click="remove(post._id)">{{ post?._id }}</p>
      <span>{{ post?.text }}</span>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  data() {
    return {
      Arr: "",
    };
  },
  computed: {
    M() {
      return this.Arr ? this.Arr : this.hello;
    },
  },
  methods: {
    async remove(id) {
      console.log(id);
      try {
        await $fetch(`http://localhost:5000/api/posts/${id}`, {
          method: "DELETE",
        });
        this.Arr = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        console.log(e);
      }
    },
    async send(value) {
      try {
        await $fetch("http://localhost:5000/api/posts", {
          method: "POST",
          body: { text: value },
        });
        this.Arr = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        console.log(e);
      }
    },
  },
  async asyncData() {
    return { hello: await $fetch("http://localhost:5000/api/posts") };
  },
  // http://localhost:5000
});
</script>

<style>
</style>