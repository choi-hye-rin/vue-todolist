<template>
  <div class="list">
    <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todoItems: {
      type: Array,
    },
  },
};
</script>
<style>
.list {
  margin-top: 30px;
}
</style>
