<template>
  <label>
    <!-- value = 지정해주는 값(inputValue === 부모에서 보낸 item.id)  -->
    <input type="checkbox" :value="inputValue" v-model="model" />
    <span>{{ inputValue }}</span>
  </label>
</template>

<script>
export default {
  name: "CheckboxVue",
  props: {
    inputValue: {
      type: String,
    },
    value: {
      // v-model 에서 받은 value
      type: Array,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
