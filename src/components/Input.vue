<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="change"
  />
</template>

<script>
export default {
  name: "TodoInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    change: function ($e) {
      this.$emit("input", $e.target.value);
    },
  },
};
</script>

<style>
input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #cdcdcd;

  &:focus {
    outline: none;
  }
}
</style>
