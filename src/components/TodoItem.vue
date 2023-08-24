<template>
  <div>
    <div class="item-wrapper" :class="checkedClass">
      <label class="content-wrapper" :htmlFor="id">
        <div v-if="isSelect">
          <TodoCheck
            :id="id"
            :checked="isItemSelected"
            :check-change="updateCheckedItems"
            :is-select-item="true"
          />
        </div>
        <TodoCheck
          :id="id"
          :checked="isTodoChecked"
          :check-change="updateTodoChecked"
        />
        <div class="content">{{ item.content }}</div>
      </label>
      <div class="button-wrapper">
        <Button
          v-if="!isTodoChecked"
          button-type="button-edit"
          :button-click="showEditModal"
          >✎</Button
        >
        <Button button-type="button-remove" :button-click="deleteTodoItem"
          >X</Button
        >
      </div>
    </div>
    <TodoEditModal ref="editModal" :todo-item="item" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import TodoEditModal from "./TodoEditModal.vue";
import TodoCheck from "./TodoCheck.vue";

export default {
  name: "TodoItem",
  components: {
    Button,
    TodoCheck,
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
    isTodoChecked() {
      const checked = this.item.isDone;
      return checked;
    },
    isItemSelected() {
      const ids = this.$store.state.CheckedItem.map((item) => item.id);
      const checked = ids.includes(this.id);
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
    updateCheckedItems: function () {
      this.$store.commit("setCheckedItems", this.id);
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
