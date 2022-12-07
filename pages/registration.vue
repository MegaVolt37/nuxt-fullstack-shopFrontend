<template>
  <div>
    <form>
      <input
        type="text"
        v-model="formData.fullName"
        placeholder="Введите имя пользователя"
      />
      <input
        type="email"
        v-model="formData.email"
        placeholder="Введите email"
      />
      <input
        type="new-password"
        v-model="formData.password"
        placeholder="Введите пароль"
      />
      <input
        type="new-password"
        v-model="formData.currentPassword"
        :class="{ warning: readCurrentPassword }"
        placeholder="Повторите пароль"
      />
      <button @click.prevent="sumbit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default defineNuxtComponent({
  data() {
    return {
      formData: {
        email: "",
        password: "",
        currentPassword: "",
        fullName: "",
      },
    };
  },
  computed: {
    readCurrentPassword() {
      return (
        this.formData.currentPassword == this.formData.password &&
        this.formData.password.length
      );
    },
    validationEmail() {
      return this.formData.email.length;
    },
    validationPassword() {
      return this.formData.password.length;
    },
  },
  methods: {
    async sumbit() {
      if (
        this.validationEmail &&
        this.validationPassword &&
        this.readCurrentPassword
      ) {
        try {
          await $fetch(`http://localhost:5000/api/users/registration`, {
            method: "POST",
            body: {
              email: this.formData.email,
              password: this.formData.password,
              fullName: this.formData.fullName,
            },
          });
          this.formData.email = "";
          this.formData.password = "";
          this.formData.currentPassword = "";
          this.formData.fullName = "";
          navigateTo("/");
        } catch (error) {
          console.log(error);
        }

        console.log(1);
      } else {
        console.log(2);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
form {
  padding-top: 50px;
}
button {
  width: 200px;
  height: 50px;
  background-color: green;
  color: #fff;
}
</style>