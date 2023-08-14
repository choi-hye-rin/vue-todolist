<template>
  <label>
    <input
      class="input-checkbox-wrapper"
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="change"
    />
    <div class="check"></div>
  </label>
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

<style>
.input-checkbox-wrapper {
  display: none;

  &:checked ~ .check {
    background-color: #f9fbfc;
    border-color: #f9fbfc;
    &:after {
      visibility: visible;
    }
  }
}

.check {
  position: relative;
  width: 15px;
  height: 15px;
  border: 1px solid #dae1e6;
  border-radius: 4px;

  &:after {
    content: "✓";
    position: absolute;
    top: -2px;
    left: 3px;
    font-size: 15px;
    color: #6c7d8b;
    visibility: hidden;
  }
}
</style>
