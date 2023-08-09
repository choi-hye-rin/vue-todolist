<template>
  <div class="list">
    <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
    <Button button-type="button-remove" :button-click="click">clear all</Button>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import Button from "./Button.vue";

export default {
  components: {
    TodoItem,
    Button,
  },
  props: {
    todoItems: {
      type: Array,
    },
  },
  methods: {
    click: function () {
      this.$store.commit("clearTodoItem");
    },
  },
};
</script>
<style>
.list {
  margin-top: 30px;
}
</style>
