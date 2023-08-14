<template>
  <input
    class="input-checkbox-wrapper"
    type="checkbox"
    :id="id"
    :checked="checked"
    @change="change"
  />
</template>

<script>
export default {
  name: "TodoCheckbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
    checkChange: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    change: function ($e) {
      this.$emit("change", $e.target.checked);
      this.checkChange($e.target.checked);
    },
  },
};
</script>

<style></style>
