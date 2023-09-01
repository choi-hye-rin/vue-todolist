import Vue from "vue";
import Vuex from "vuex";

import useTodos from "./api/todos";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    TodoList: [],
    IsSelect: false,
    CheckedItem: [],
    TodoSort: "createdAt",
    Category: [],
  },
  getters: {},
  mutations: {
    setTodoItem: function (state, data) {
      const result = data.reduce((acc, curr) => {
        const { category } = curr;
        if (acc[category]) acc[category].push(curr);
        else acc[category] = [curr];
        return acc;
      }, {});
      console.log("result", result);
      state.TodoList = data;
    },
    setIsSelect: function (state) {
      state.IsSelect = !state.IsSelect;
    },
    setCheckedItems: function (state, id) {
      // 포함하고 있는 경우 (제거)
      const tempItems = this.state.CheckedItem;
      const ids = tempItems.map((item) => item.id);
      if (ids.includes(id)) {
        const newItems = tempItems.filter((item) => item.id !== id);
        state.CheckedItem = newItems;
        return;
      }
      // 포함하지 않는 경우 (추가)
      tempItems.push({ id });
      state.CheckedItem = tempItems;
    },
    resetCheckedItems: function (state) {
      state.CheckedItem = [];
    },
    setTodoSort: function (state, data) {
      state.TodoSort = data;
    },
    setCategory: function (state, data) {
      state.Category = data;
    },
  },
  actions: {
    async getTodoList() {
      const sort = this.state.TodoSort;
      const res = await useTodos.getTodoList(sort);
      this.commit("setTodoItem", res.data);
    },
    async addTodoItem(store, item) {
      await useTodos.addTodoItem(item);
      this.dispatch("getTodoList");
    },
    async deleteTodoItem(store, id) {
      await useTodos.deleteTodoItem(id);
      this.dispatch("getTodoList");
    },
    async deleteAllTodos(store, items) {
      const ids = items.map((item) => item.id);
      await Promise.all(ids.map((id) => useTodos.deleteTodoItem(id)));
      await this.dispatch("getTodoList");
    },
    async updateTodoItem(store, item) {
      await useTodos.updateTodoItem(item.id, item);
      this.dispatch("getTodoList");
    },
    async updateAllTodoItems(store, items) {
      const ids = items.map((item) => item.id);
      await Promise.all(
        ids.map((id) => useTodos.updateTodoItem(id, { isDone: true }))
      );
      await this.dispatch("getTodoList");
    },
    async getCategory() {
      const res = await useTodos.getCategory();
      this.commit("setCategory", res.data);
    },
  },
  modules: {},
});

export default store;
