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

export default {
  components: {
    Button,
    Select,
    TodoCategory,
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
      return this.$store.state.TodoList;
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
      return this.$store.state.IsSelect;
    },
    checkedItems() {
      return this.$store.state.CheckedItem;
    },
    computedSort() {
      const sort = this.$store.state.TodoSort;
      if (sort === "createdAt") {
        return "등록 순";
      }
      return "완료일 순";
    },
  },
  methods: {
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
  watch: {
    selectedSort: function (value) {
      this.$store.commit("setTodoSort", value);
      this.$store.dispatch("getTodoList", value);
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
