<template>
  <div>
    <input type="checkbox" @change="change" />
  </div>
</template>

<script>
export default {
  name: "CheckboxVue",
  props: {
    change: {
      type: Function,
    },
  },
};
</script>

<style></style>
