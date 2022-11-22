<template>
  <div class="modal-wrapper">
    <div class="close-modal" @click="closeModal"></div>
    <div class="modal-content">
      <h2>{{ modalTitle }}</h2>
      <div class="modal-inputs">
        <slot></slot>
      </div>

      <span @click="closeModal"
        ><img :src="Close" alt="Закрыть модальное окно"
      /></span>
    </div>
  </div>
</template>
<script>
import Close from "~/assets/icon/Close.svg";
export default {
  name: "modalWindow",
  data() {
    return {
      Close,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    modalAdd() {
      this.$emit("modalAdd");
    },
  },
  emits: ["modalAdd", "closeModal"],
  props: {
    modalTitle: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(252, 213, 186, 0.8);
  z-index: 15;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  display: flex;
  .close-modal {
    height: 100%;
    width: 100%;
    position: fixed;
  }
  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
    font-family: "Rubik700";
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #414141;
  }
  .modal-content {
    width: auto;
    position: relative;
    padding: 70px 80px;
    margin: auto;
    background: #ffffff;
    box-shadow: 8px 16px 32px rgba(255, 102, 51, 0.2);
    border-radius: 4px;
    height: fit-content;
  }
  .modal-inputs {
    max-width: 605px;
    margin: 0 auto;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    cursor: pointer;
    background: #f3f2f1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 1250px) {
  .modal-wrapper {
    .modal-inputs {
      display: grid;
      max-width: none;
    }
    .modal-content {
      width: 100%;
      margin: auto 20px;
    }
  }
}
@media (max-width: 1250px) and (min-width: 600px) {
  .modal-wrapper {
    .modal-inputs {
      grid-gap: 20px;
    }
  }
}
@media (max-width: 600px) {
  .modal-wrapper {
    .modal-content {
      overflow-y: auto;
      padding: 20px;
      padding-top: 50px;
      padding-bottom: 40px;
      margin: auto 0;
      h2 {
        font-size: 17px;
      }
      .modal-inputs {
        input {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
