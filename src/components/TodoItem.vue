<template>
  <div>
    <div class="item">
      <div class="content">{{ item.content }}</div>
      <div>
        <Button button-type="button-edit" :button-click="showEditModal"
          >✎</Button
        >
        <Button button-type="button-remove" :button-click="deleteTodoItem"
          >X</Button
        >
      </div>
    </div>
    <TodoEditModal ref="editModal" :todoItem="item" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import TodoEditModal from "./TodoEditModal.vue";

export default {
  name: "TodoItem",
  components: {
    Button,
    TodoEditModal,
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    deleteTodoItem: function () {
      this.$store.dispatch("deleteTodoItem", this.item.id);
    },
    showEditModal: function () {
      this.$refs.editModal.$refs.modal.show();
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
