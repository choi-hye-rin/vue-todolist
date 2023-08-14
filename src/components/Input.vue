<template>
  <!-- 
    v-bind:value
    v-on:input
  -->
  <input
    class="input-text-wrapper"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="change"
    @keyup.enter="handleSubmit()"
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
    handleSubmit: {
      type: Function,
      default: () => {},
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
.input-text-wrapper {
  width: 100%;
  border: none;
  border-bottom: 1px solid #dae1e6;

  &:focus {
    outline: none;
  }
}
::placeholder {
  color: #dae1e6;
}
</style>
