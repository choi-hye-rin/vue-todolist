<template>
  <button type="button" :class="buttonType" @click="buttonClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TodoButton",
  props: {
    buttonType: {
      type: String,
      default: "button-create",
    },
    buttonClick: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
button {
  border-radius: 12px;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.button-create {
  background-color: #99ccff;
  color: white;
}

.button-remove {
  background-color: transparent;
  color: #d8d8d8;
}
</style>
