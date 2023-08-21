<template>
  <label>
    <input type="radio" :value="radioValue" v-model="model" />
    <span>
      {{ radioValue }}
    </span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    // value === 부모가 v-model 에서 던진 값
    value: {
      type: String,
    },
    radioValue: {
      type: String,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        // 꼭 input 으로 던져야 함 (v-model이 input이라는 이벤트로 받기 때문)
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
