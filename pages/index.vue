<template>
  <div>
    <h1>Hove</h1>
    <post @send="addPost" />
    <div v-for="post in hello" :key="post">
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
        this.hello = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        console.log(e);
      }
    },
    async addPost(value) {
      try {
        // await $fetch("https://jsonыplaceholder.typicode.com/posts", {
        //   method: "GET",
        // });
        this.hello = await $fetch(
          "https://jsonplaceholder.typicode.com/postss"
        );
      } catch (e) {
        throw e;
      }
    },
  },
  async asyncData({}) {
    try {
      return {
        hello: await $fetch("https://jsonplaceholder.typicode.com/posts"),
      };
    } catch {}
  },
});
</script>

<style>
</style>