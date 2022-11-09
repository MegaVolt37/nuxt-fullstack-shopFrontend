<template>
  <input
    @click="getRating"
    :name="`rating_${name}`"
    :value="value"
    :id="idRatingItem"
    type="radio"
  />

  <label :for="idRatingItem" class="label_rating"></label>
</template>
<script>
export default {
  name: "RatingItem",
  data() {
    return {
      idRatingItem: "rating_" + this.$props.id,
      status: false,
    };
  },
  props: {
    value: String,
    id: String,
    name: Number,
  },
  methods: {
    getRating(e) {
      this.$emit("getRating", e.target.value);

      // if (!this.status) {
      //   this.$emit("getRating", e.target.value);
      //   this.status = true;
      // }
    },
  },
  emits: ["getRating"],
};
</script>
<style lang="scss" scoped>
input[type="radio"] {
  display: none;
}
.label_rating {
  display: block;
  float: right;
  width: 14px;
  height: 13px;
  background-image: url("@/assets/icon/Rating/StarLock.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-left: 2px;
  transition: all 0.3s ease;
}
// .label_rating:last-child {
//   margin-left: 0;
// }
.label_rating:hover,
.label_rating:hover ~ .label_rating,
input[type="radio"]:checked ~ .label_rating {
  // background-image: url("~/assets/icon/Rating-icon-checked.svg");
  background-repeat: no-repeat;
  background-position: center;
  // transition: all .9s ease;
}
.reviews-product-wrapper,
.reviews-supplier-wrapper,
.reviews-delivery-wrapper {
  .label_rating {
    display: block;
    float: right;
    width: 17px;
    height: 15px;
    // background-image: url("~/assets/icon/Rating-icon-reviews.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-left: 0;
    transition: none;
  }
  .label_rating:hover,
  .label_rating:hover ~ .label_rating {
    width: 17px;
    height: 15px;
    // background-image: url("@/assets/icon/Rating-icon-hover.svg");
  }
  input[type="radio"]:checked ~ .label_rating {
    width: 17px;
    height: 15px;
    // background-image: url("@/assets/icon/Rating-icon-checked-reviews.svg");
  }
}
</style>
