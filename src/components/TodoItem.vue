<template>
  <div>
    <div class="item-wrapper">
      <div class="content-wrapper">
        <Checkbox
          :id="id"
          :checked="isChecked"
          :check-change="updateTodoChecked"
        />
        <div class="content">{{ item.content }}</div>
      </div>
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
import Checkbox from "./Checkbox.vue";

export default {
  name: "TodoItem",
  components: {
    Button,
    Checkbox,
    TodoEditModal,
  },
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    id() {
      return this.item.id;
    },
    isChecked() {
      const checked = this.item.isDone;
      return checked;
    },
  },
  methods: {
    deleteTodoItem: function () {
      this.$store.dispatch("deleteTodoItem", this.item.id);
    },
    showEditModal: function () {
      this.$refs.editModal.$refs.modal.show();
    },
    updateTodoChecked: function (isDone) {
      const item = {
        id: this.item.id,
        isDone,
      };
      this.$store.dispatch("updateTodoItem", item);
    },
  },
};
</script>

<style>
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f9fbfc;
  padding: 5px;
}

.content-wrapper {
  display: flex;
  gap: 10px;

  .content {
    font-size: 13px;
    color: #6c7d8b;
  }
}
</style>
