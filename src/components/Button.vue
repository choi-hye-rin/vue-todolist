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
      type: Function,
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
  background-color: #a1c9fa;
  color: white;
}

.button-remove,
.button-edit {
  background-color: transparent;
  color: #dae1e6;
  padding: 10px 5px;
}
</style>
