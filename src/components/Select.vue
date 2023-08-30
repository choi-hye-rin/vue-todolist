<template>
  <div>
    <select v-model="model2">
      <option v-for="item in itemList" :key="item.id" :value="item.value">
        {{ item.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    itemList: {
      type: Array,
    },
    value: {
      // v-model에서 받은 값
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    model2: {
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
