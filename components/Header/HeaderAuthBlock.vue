<template>
  <div class="modal__auth">
    <div class="modal__auth-input">
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
          type="password"
          placeholder="Введите пароль"
          v-model="formData.password"
        />
      </div>
    </div>
    <button class="modal__auth-login" @click="sendLogin">Вход</button>
    <div class="modal__auth-buttons">
      <button
        class="modal__auth-buttons-register"
        @click="$emit('openRegister')"
      >
        Регистрация
      </button>
      <p class="modal__auth-buttons-password">Забыли пароль?</p>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "pinia";
// import { storeAuth } from "~/store/Auth";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    async sendLogin() {
      try {
        await this.$auth.loginWith("local", {
          body: this.formData,
        });
        this.$emit("closeModal");
      } catch (error) {
        console.log(error);
      }
    },
  },
  emits: ["openRegister", "closeModal"],
};
</script>

<style lang="scss" scoped>
.modal__auth {
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
  &-login {
    margin-bottom: 30px;
    font-size: 24px;
    color: #ff6633;
    background: #fcd5ba;
    border-radius: 4px;
    padding: 20px 20px;
    width: 100%;
    cursor: pointer;
  }
  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-register {
      font-size: 12px;
      color: #70c05b;
      border: 1px solid #70c05b;
      border-radius: 4px;
      padding: 8px 8px;
      max-width: 120px;
      width: 100%;
      background: transparent;
      cursor: pointer;
    }
    &-password {
      max-width: 120px;
      width: 100%;
      font-size: 12px;
      line-height: 150%;
      color: #606060;
      display: block;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>