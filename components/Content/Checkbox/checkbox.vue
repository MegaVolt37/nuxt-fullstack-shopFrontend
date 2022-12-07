<template>
  <div class="agreement_block">
    <div class="agreement_block_checkbox">
      <input
        class="checkbox_input_checked custom-checkbox"
        :id="idStyle"
        type="checkbox"
        @change="getDataParents()"
        @click.stop
        v-model="FormSubmit.Checkbox"
        ref="check"
      />
      <label
        ref="label"
        @click.stop
        class="checkbox_label_checked"
        :for="idStyle"
        :id="'CLabel' + idStyle"
        >{{ text }}</label
      >
    </div>
    <p class="agreement_block_agreement">{{ placeholder }}</p>
  </div>
</template>
<script>
export default {
  name: "Checkbox",
  data() {
    return {
      FormSubmit: {
        Checkbox: false,
      },
    };
  },
  computed: {
    Value() {
      return this.$props.value;
    },
  },
  watch: {
    Value(v) {
      this.FormSubmit.Checkbox = v;
      this.$refs.check.checked = v;
    },
  },
  methods: {
    getDataParents() {
      this.$emit("getCheckbox", this.FormSubmit.Checkbox);
    },
    CheckboxTrue() {
      if (this.$props.getCheckbox == true) {
        this.FormSubmit.Checkbox = this.$props.getCheckbox;
        this.$emit("getCheckbox", this.FormSubmit.Checkbox);
      }
    },
  },
  mounted() {
    this.CheckboxTrue();
  },
  props: {
    text: String,
    placeholder: String,
    idStyle: String,
    value: [String, Number, Boolean],
    getCheckbox: Boolean,
  },
};
</script>
<style lang="scss">
.agreement_block {
  grid-template-columns: auto;
  input {
    margin-bottom: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin-bottom: 0;
    font-size: 0px;
    height: 16px;
    width: 16px;
  }
  label {
    font-family: "Rubik400";
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #353332;
    cursor: pointer;
  }
  .custom-checkbox + label {
    display: inline-flex;
    align-items: flex-start;
    margin-right: auto;
    gap: 8px;
    text-align: left;
    width: 100%;
    &::before {
      display: inline-block;
      content: "";
      background-color: #fff;
      border: 1px solid #bfbfbf;
      border-radius: 4px;
      height: 24px;
      width: 24px;
      flex: 0 0 24px;
    }
  }
  .custom-checkbox:checked + label::before {
    background-color: #70c05b;
    border: 1px solid #70c05b;
    height: 24px;
    width: 24px;
    color: $orange;
    background-image: url("@/assets/icon/Ok.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 8px;
  }
}
</style>
