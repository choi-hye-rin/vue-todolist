<template>
  <div class="list" v-if="todoItems.length > 0">
    <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
    <div class="buttonWrapper">
      <Button
        v-if="todoItems.length > 0"
        button-type="button-remove"
        :button-click="click"
        >clear all</Button
      >
    </div>
  </div>
  <div v-else class="noList">휑..</div>
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
      this.$store.dispatch("deleteAllTodos", this.todoItems);
    },
  },
};
</script>
<style>
.list {
  margin-top: 30px;
}

.noList {
  margin-top: 100px;
  color: #cdcdcd;
}

.buttonWrapper {
  margin-top: 30px;
}
</style>
