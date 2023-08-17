<template>
  <div>
    <div class="item-wrapper" :class="checkedClass">
      <label class="content-wrapper" :htmlFor="id">
        <div v-if="isSelect">
          <Checkbox />
        </div>
        <TodoCheck
          :id="id"
          :checked="isChecked"
          :check-change="updateTodoChecked"
        />
        <div class="content">{{ item.content }}</div>
      </label>
      <div class="button-wrapper">
        <Button
          v-if="!isChecked"
          button-type="button-edit"
          :button-click="showEditModal"
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
import TodoCheck from "./TodoCheck.vue";
import Checkbox from "./Checkbox.vue";

export default {
  name: "TodoItem",
  components: {
    Button,
    TodoCheck,
    TodoEditModal,
    Checkbox,
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
    checkedClass() {
      if (this.item.isDone) {
        return "done";
      }
      return "";
    },
    isSelect() {
      return this.$store.state.IsSelect;
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
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  border-bottom: 1px solid #f9fbfc;
  padding: 5px;
  text-align: left;

  .content-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;

    .content {
      width: 100%;
      font-size: 13px;
      color: #6c7d8b;
    }
  }

  .button-wrapper {
    text-align: right;
  }
}

.done {
  .content {
    opacity: 0.3;
  }
}
</style>
