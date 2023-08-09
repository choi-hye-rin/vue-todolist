<template>
  <div class="item">
    <div>{{ item.content }}</div>
    <Button button-type="button-remove" :buttonClick="click">X</Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "TodoItem",
  components: {
    Button,
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    click: function () {
      this.$store.commit("deleteTodoItem", this.item);
    },
  },
};
</script>

<style>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f9fbfc;
  padding: 5px;

  &:last-child {
    border-bottom: none;
  }
}
</style>
