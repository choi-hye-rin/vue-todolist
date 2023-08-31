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
import Select from "./Select.vue";

export default {
  components: {
    TodoItem,
    Button,
    Select,
  },
  props: {
    todoItems: {
      type: Array,
    },
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
}
.select-button {
  display: inline-block;
  text-align: left;
}

.sort-button {
  display: inline-block;
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
