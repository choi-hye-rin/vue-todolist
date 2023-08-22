<template>
  <div class="list" v-if="todoItems.length > 0">
    <div class="">
      <Button
        v-if="!isSelect"
        button-type="button-remove"
        :button-click="setIsSelect"
      >
        선택하기
      </Button>
      <div v-else class="select-wrapper">
        <div>선택한 {{ this.checkedItems.length }}건</div>
        <div>
          <Button
            button-type="button-remove"
            :button-click="removeSelectedItems"
          >
            삭제
          </Button>
          <span> / </span>
          <Button button-type="button-remove" :button-click="doneSelectedItems">
            완료 처리
          </Button>
          <span> / </span>
          <Button button-type="button-remove" :button-click="setIsSelect">
            취소
          </Button>
        </div>
      </div>
    </div>
    <TodoItem v-for="item in todoItems" :key="item.id" :item="item" />
    <div class="buttonWrapper">
      <Button
        v-if="todoItems.length > 0"
        button-type="button-remove"
        :button-click="removeAllItems"
      >
        clear all
      </Button>
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
  computed: {
    isSelect() {
      return this.$store.state.IsSelect;
    },
    checkedItems() {
      return this.$store.state.CheckedItem;
    },
  },
  methods: {
    removeAllItems: function () {
      this.$store.dispatch("deleteAllTodos", this.todoItems);
    },
    setIsSelect: function () {
      this.$store.commit("setIsSelect");
      this.$store.commit("resetCheckedItems");
    },
    removeSelectedItems: function () {
      this.$store.dispatch("deleteAllTodos", this.checkedItems);
      this.$store.commit("resetCheckedItems");
    },
    doneSelectedItems: function () {
      this.$store.dispatch("updateAllTodoItems", this.checkedItems);
      this.$store.commit("resetCheckedItems");
    },
  },
};
</script>
<style scoped>
.list {
  margin-top: 30px;
}

.noList {
  margin-top: 100px;
  color: #cdcdcd;
}

.select-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #dae1e6;
  font-size: 13px;
}

.buttonWrapper {
  margin-top: 30px;

  .divider {
    color: #dae1e6;
  }
}
</style>
