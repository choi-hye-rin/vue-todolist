import { defineStore } from "pinia";

import useTodos from "./../../api/todos";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    TodoList: [],
    IsSelect: false,
    CheckedItem: [],
    TodoSort: "createdAt",
    Category: [],
  }),
  getters: {},
  actions: {
    async getTodoList() {
      const sort = this.TodoSort;
      const res = await useTodos.getTodoList(sort);
      this.TodoList = res.data;
    },
    async addTodoItem(item) {
      await useTodos.addTodoItem(item);
      await this.getTodoList();
    },
    async deleteTodoItem(id) {
      await useTodos.deleteTodoItem(id);
      this.getTodoList();
    },
    async deleteAllTodos(items) {
      const ids = items.map((item) => item.id);
      await Promise.all(ids.map((id) => useTodos.deleteTodoItem(id)));
      await this.getTodoList();
    },
    async updateTodoItem(item) {
      await useTodos.updateTodoItem(item.id, item);
      this.getTodoList();
    },
    async updateAllTodoItems(items) {
      const ids = items.map((item) => item.id);
      await Promise.all(
        ids.map((id) => useTodos.updateTodoItem(id, { isDone: true }))
      );
      await this.getTodoList();
    },
    async getCategory() {
      const res = await useTodos.getCategory();
      this.Category = res.data;
    },
    async addCategory(data) {
      await useTodos.addCategory(data);
      await this.getCategory();
    },
    setIsSelect() {
      this.IsSelect = !this.IsSelect;
    },
    resetCheckedItems() {
      this.CheckedItem = [];
    },
    setTodoSort(data) {
      this.TodoSort = data;
    },
    setCategory(data) {
      this.Category = data;
    },
    setCheckedItems(id) {
      // 포함하고 있는 경우 (제거)
      const tempItems = this.CheckedItem;
      const ids = tempItems.map((item) => item.id);
      if (ids.includes(id)) {
        const newItems = tempItems.filter((item) => item.id !== id);
        this.CheckedItem = newItems;
        return;
      }
      // 포함하지 않는 경우 (추가)
      tempItems.push({ id });
      this.CheckedItem = tempItems;
    },
  },
});
