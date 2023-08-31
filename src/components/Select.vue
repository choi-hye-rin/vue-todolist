<template>
  <div>
    <select class="custom-select" v-model="model2">
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="item in itemList" :key="item.id" :value="item.id">
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
    placeholder: {
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

<style scoped>
.custom-select {
  padding: 3px 5px;
  border: none;
  outline: none;
  color: #cdcdcd;
}
</style>
