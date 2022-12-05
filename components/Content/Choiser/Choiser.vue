<template>
  <div class="choiser">
    <div class="choiser__btn-left" @click="subtract"></div>
    <div class="choiser__input">
      <input
        class="choiser__input-number"
        v-model="valueChoise"
        type="number"
        name="choiser"
      />
    </div>
    <div class="choiser__btn-right" @click="add"></div>
  </div>
</template>

<script>
export default {
  name: "Choiser",
  data() {
    return {
      valueChoise: this.$props.start,
    };
  },
  watch: {
    valueChoise(value) {
      if (value <= this.$props.max && value >= this.$props.min) {
        this.$emit("getChoise", this.valueChoise);
      } else if (value.length < this.$props.min) {
        this.valueChoise = this.$props.min;
      } else {
        this.valueChoise = this.$props.max;
      }
    },
  },
  methods: {
    subtract() {
      if (this.valueChoise <= this.$props.min) {
        this.valueChoise = this.$props.min;
      } else {
        this.valueChoise--;
      }
    },
    add() {
      if (this.valueChoise < this.$props.max) {
        this.valueChoise++;
      }
    },
  },
  emits: ["getChoise"],
  props: {
    min: Number,
    max: Number,
    start: Number,
  },
};
</script>

<style lang="scss" scoped>
input[type="number"] {
  width: 100%;
  height: 34px;
  -moz-appearance: textfield;
  margin: 0;
  border: none;
  font-size: 15px;
  background-color: #70c05b;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:focus {
    outline: none;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.choiser {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #70c05b;
  border-radius: 4px;
  max-width: 160px;
  margin: 0 auto;
  background-color: #70c05b;
  .choiser__btn-left {
    position: relative;
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-left: 10px;
    &::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 10px;
      right: 50%;
      top: 50%;
      transform: translateX(50%);
      background-color: #fff;
    }
  }
  .choiser__btn-left:hover::after {
    background-color: #fff;
  }
  .choiser__btn-right {
    position: relative;
    width: 50%;
    height: 50%;
    margin: 0 auto;
    margin-right: 10px;
    &::after,
    &::before {
      position: absolute;
      content: "";
      height: 2px;
      width: 10px;
      right: 50%;
      top: 50%;
      transform: translateX(50%);
      background-color: #fff;
    }
    &::before {
      transform: translateX(50%) rotateZ(90deg);
    }
  }
  .choiser__btn-right:hover::after,
  .choiser__btn-right:hover::before {
    background-color: #fff;
  }
  div {
    color: #70c05b;
    cursor: pointer;
  }
  div:hover {
    color: #70c05b;
  }
}
@media (max-width: 600px) {
  input[type="number"] {
    font-size: 13px;
  }
}
</style>
