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
        await $fetch("https://breakingbadapi.com/api/characters", {
          method: "POST",
          body: { text: value },
        });
        this.hello = await $fetch("http://localhost:5000/api/posts");
      } catch (e) {
        this.$error({ statusCode: 404, message: "Post not found" });
        console.log(e);
      }
    },
  },
  async asyncData({$error}) {
    try {
      return { hello: await $fetch("https://breakingbadapi.com/api/characters/0") };
    } catch {
      $error({ statusCode: 404, message: "Post not found" });
    }
    
  },
});
</script>

<style>
</style>