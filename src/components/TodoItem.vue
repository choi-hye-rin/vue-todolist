<template>
  <div class="item">
    <div class="content">{{ item.content }}</div>
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
      this.$store.dispatch("deleteTodoItem", this.item.id);
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
}

.content {
  font-size: 13px;
  color: #6c7d8b;
}
</style>
