<template>
  <div class="modal__register">
    <div class="modal__register-input">
      <div>
        <p>Имя и Фамилия</p>
        <input
          type="text"
          placeholder="Введите имя и фамилию"
          v-model="formData.fullName"
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="Введите email"
          v-model="formData.email"
        />
      </div>
      <div>
        <p>Пароль</p>
        <input
          type="new-password"
          placeholder="Введите пароль"
          v-model="formData.password"
        />
      </div>
      <div>
        <p>Повторите пароль</p>
        <input
          type="new-password"
          placeholder="Введите пароль"
          v-model="formData.currentPassword"
          :class="{ warning: readCurrentPassword }"
        />
      </div>
    </div>
    <button class="modal__register-btn" @click="register(formData)">
      Зарегистрироваться
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        password: "",
        currentPassword: "",
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
    async register() {
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
          this.$emit("register");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  emits: ["register"],
};
</script>

<style lang="scss" scoped>
.modal__register {
  max-width: 260px;
  &-input {
    margin-bottom: 30px;
    display: grid;
    gap: 20px;
    p {
      font-size: 18px;
      color: #8f8f8f;
    }
    input {
      border: 1px solid #70c05b;
      box-shadow: 4px 8px 16px rgba(112, 192, 91, 0.2);
      border-radius: 4px;
      font-size: 24px;
      color: #414141;
      padding: 12px 16px;
      caret-color: #70c05b;
      width: 100%;
    }
  }
  &-btn {
    font-size: 24px;
    color: #ff6633;
    background: #fcd5ba;
    border-radius: 4px;
    padding: 20px 20px;
    width: 100%;
    cursor: pointer;
  }
}
.modal__register-input {
}
.modal__register-btn {
}
</style>