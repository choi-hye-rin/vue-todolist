<template>
  <div class="list" v-if="todoItems.length > 0">
    <div class="button-wrapper">
      <div class="select-button">
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
            <Button
              button-type="button-remove"
              :button-click="doneSelectedItems"
            >
              완료 처리
            </Button>
            <span> / </span>
            <Button button-type="button-remove" :button-click="setIsSelect">
              취소
            </Button>
          </div>
        </div>
      </div>
      <div class="sort-button">
        <Select
          :item-list="sortOptions"
          v-model="selectedSort"
          :placeholder="computedSort"
        />
      </div>
    </div>

    <TodoCategory
      v-for="key in Object.keys(categorizedTodoItems)"
      :key="key"
      :todo-items="categorizedTodoItems[key]"
      :category="key"
    />
  </div>
  <div v-else class="noList">휑..</div>
</template>

<script>
import Button from "./Button.vue";
import Select from "./Select.vue";
import TodoCategory from "./TodoCategory.vue";

import { useTodoStore } from "../store/modules/todos";

export default {
  components: {
    Button,
    Select,
    TodoCategory,
  },
  setup() {
    const store = useTodoStore();
    return { store };
  },
  data() {
    return {
      sortOptions: [
        { id: "createdAt", value: "등록 순" },
        { id: "date", value: "완료일 순" },
      ],
      selectedSort: "",
    };
  },
  computed: {
    todoItems() {
      return this.store.TodoList;
    },
    categorizedTodoItems() {
      const result = this.todoItems.reduce((acc, curr) => {
        const { category } = curr;
        if (acc[category]) acc[category].push(curr);
        else acc[category] = [curr];
        return acc;
      }, {});
      return result;
    },
    isSelect() {
      return this.store.IsSelect;
    },
    checkedItems() {
      return this.store.CheckedItem;
    },
    computedSort() {
      const sort = this.store.TodoSort;
      if (sort === "createdAt") {
        return "등록 순";
      }
      return "완료일 순";
    },
  },
  methods: {
    setIsSelect: function () {
      this.store.setIsSelect();
      this.store.resetCheckedItems();
    },
    removeSelectedItems: function () {
      this.store.deleteAllTodos(this.checkedItems);
      this.store.resetCheckedItems();
    },
    doneSelectedItems: function () {
      this.store.updateAllTodoItems(this.checkedItems);
      this.store.resetCheckedItems();
    },
  },
  watch: {
    selectedSort: function (value) {
      this.store.setTodoSort(value);
      this.store.getTodoList(value);
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

.button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select-button {
  display: inline-block;
  text-align: left;
}

.sort-button {
  display: inline-block;
}
.select-wrapper {
  width: 100%;
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
